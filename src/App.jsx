import React, { useState } from 'react';
import Interface from './components/Interface/Interface';
import Scene from './components/Scene/Scene';
import Alert from './components/Interface/InterfaceComponents/Alert';
import { ManipulationProvider } from './context/ManipulationContext';
import FileSaver from 'file-saver';
import { loadGLBGeometry } from './utils/loadGLB';
import * as THREE from 'three';

//TODO: Flatten Hierarchy of small components to simplify architecture
//TODO: maybe Models and selected models in neuen Context oder store verfrachten
//TODO: Put all model logic and alteration functionality into a context, similar to meshmanipulation
export default function App() {

const exportOBJ = async () => {
  if (models.length < 1) {
    fireAlert("No models to export");
    return;
  }

  let objContent = '';
  let cumulativeVertexCount = 0;

  for (let index = 0; index < models.length; index++) {
    const model = models[index];
    const path = model.path;

    try {
      const { vertices, normals, faces } = await loadGLBGeometry(path);

      if (!vertices || !faces || vertices.length === 0 || faces.length === 0) {
        throw new Error("Invalid geometry data");
      }

      const size = model.scale || [1, 1, 1];
      const pos = model.position || [0, 0, 0];
      const rot = model.rotation || [0, 0, 0];  // rotation in radians expected

      // Create transform matrix with position, rotation, scale
      const transform = new THREE.Matrix4();
      const euler = new THREE.Euler(rot[0], rot[1], rot[2], 'XYZ');  // assuming XYZ order
      const scaleVec = new THREE.Vector3(...size);
      const positionVec = new THREE.Vector3(...pos);

      transform.compose(positionVec, new THREE.Quaternion().setFromEuler(euler), scaleVec);

      // Apply transform to each vertex
      const transformedVertices = vertices.map(v => {
        const vec = new THREE.Vector3(v[0], v[1], v[2]);
        vec.applyMatrix4(transform);
        return vec;
      });

      // Apply only rotation (no position/scale) to normals, then normalize
      const transformedNormals = normals.map(n => {
        const normVec = new THREE.Vector3(n[0], n[1], n[2]);
        normVec.applyEuler(euler).normalize();
        return normVec;
      });

      transformedVertices.forEach(v => {
        objContent += `v ${v.x} ${v.y} ${v.z}\n`;
      });

      transformedNormals.forEach(n => {
        objContent += `vn ${n.x} ${n.y} ${n.z}\n`;
      });

      const vertexOffset = cumulativeVertexCount;

      faces.forEach(f => {
        objContent += `f ${f[0] + 1 + vertexOffset}//${f[0] + 1 + vertexOffset} ` +
                      `${f[1] + 1 + vertexOffset}//${f[1] + 1 + vertexOffset} ` +
                      `${f[2] + 1 + vertexOffset}//${f[2] + 1 + vertexOffset}\n`;
      });

      cumulativeVertexCount += vertices.length;

    } catch (error) {
      console.error("Error loading GLB model from path:", path, error);
      fireAlert("Failed to export model");
      return;
    }
  }

  const objBlob = new Blob([objContent], { type: 'text/plain' });
  FileSaver.saveAs(objBlob, 'ExportedScene.obj');
  fireAlert("OBJ export completed!");
};

  //File export for Unity URDF
  const exportURDF = () => {
    if (models.length < 1) {
      fireAlert("No models to export");
      return;
    }

    let urdfContent = `<robot name="ExportedRobot">\n`;

    models.forEach((model, index) => {
      urdfContent += `
  <link name="link_${index}">
    <visual>
      <geometry>
        <mesh filename="${model.path}" />
      </geometry>
      <origin xyz="${model.position.join(' ')}" rpy="0 0 0"/>
    </visual>
  </link>\n`;
    });

    urdfContent += `</robot>`;

    const urdfBlob = new Blob([urdfContent], { type: 'text/xml' });
    FileSaver.saveAs(urdfBlob, 'ExportedRobot.urdf');

    fireAlert("URDF export completed!");
  };

  // model array where all models are saved
  const [models, setModels] = useState([]);
  // selected model which is identified by its ID
  const [selectedModel, setSelectedModel] = useState(null);

  //alert states and message
  const [visible, setVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const fireAlert = (message) => {
    setAlertMessage(message);
    setVisible(true);
  };

  const createModel = (type, path, id=Date.now(), position=[0.5, 2, 0], rotation=[0, 0, 0], scale=[1, 1, 1]) => {
    const newModel = { 
      id: id,
      type: type,
      path: path,
      position: position,
      rotation: rotation,
      scale: scale,
    };

    setModels((prevModels) => [...prevModels, newModel]);

    setSelectedModel(newModel.id);
  };

  const copyModel = () => {
    const copiedModel = models.find((model) => model.id === selectedModel);
    createModel(copiedModel.type, copiedModel.path, Date.now(), copiedModel.position, copiedModel.rotation, copiedModel.scale);
    fireAlert("Copied selected model");
  };

  const deleteSelectedModel = (id=null) => {
    if (selectedModel !== null) {
      const updatedModels = models.filter((model) => model.id !== selectedModel);
      setModels(updatedModels);
      setSelectedModel(null);
      fireAlert("Deleted selected model");
    };
  };

  //TODO:o use more temp variables for more readability in value preparation for export
  //maybe add name of mode aswell?
  const exportCSV = () => {
    const header = 'id, type, path, position, rotation, scale\n';
    var modelRows = '';

    if (models.length < 1) {
      return;
    }

    models.forEach(model => {
      modelRows += `${model.id},${model.type},${model.path},${JSON.stringify(model.position).replaceAll(",", "|")},${JSON.stringify(model.rotation).replaceAll(",", "|")},${JSON.stringify(model.scale).replaceAll(",", "|")}\n`;
    });

    const csv = header + modelRows;

    const csvFile = new Blob([csv], {type: 'text/csv'});
    FileSaver.saveAs(csvFile, 'Robot_Configuration.csv');
  };

  //TODO Refactor into something more elegant, this is only a temporary solution and doesnt handle edge cases well
  const importCSV = (csvData) => {
    const timestamp = Date.now();

    setModels([]);

    var csvRows = csvData.split('\n');
    csvRows.splice(0, 1);
    csvRows = csvRows.filter(row => row.trim() !== '');

    var cleanedRows = csvRows.map(row => row.split(','));
    cleanedRows.forEach(row => {
      createModel(
        row[1],
        row[2],
        row[0] + timestamp,
        JSON.parse(row[3].replaceAll('|', ',')),
        JSON.parse(row[4].replaceAll('|', ',')),
        JSON.parse(row[5].replaceAll('|', ','))
      );

      setSelectedModel(null);
    });
  };

  // Hover states for buttons
  const [hoverOBJ, setHoverOBJ] = useState(false);
  const [hoverURDF, setHoverURDF] = useState(false);

  return (
    <div className='relative h-full w-full'>
      <ManipulationProvider>
        {visible && (
          <Alert
            message={alertMessage}
            visible={visible}
            setVisible={setVisible}
          />
        )}

        <Interface
          models={models}
          selectedModel={selectedModel}
          createModel={createModel}
          deleteModel={deleteSelectedModel}
          copyModel={copyModel}
          exportCSV={exportCSV}
          importCSV={importCSV}
        />

        {/* Buttons container fixed bottom-left */}
        <div style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          zIndex: 1000
        }}
        className="pointer-events-auto z-50"
        >
          <button
            onClick={exportOBJ}
            onMouseEnter={() => setHoverOBJ(true)}
            onMouseLeave={() => setHoverOBJ(false)}
            style={{
              padding: '10px 20px',
              backgroundColor: hoverOBJ ? '#f0f0f0' : 'white',
              color: 'black',
              border: '2px solid gray',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
          >
            Export OBJ for Unity
          </button>

          <button
            onClick={exportURDF}
            onMouseEnter={() => setHoverURDF(true)}
            onMouseLeave={() => setHoverURDF(false)}
            style={{
              padding: '10px 20px',
              backgroundColor: hoverURDF ? '#f0f0f0' : 'white',
              color: 'black',
              border: '2px solid gray',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
          >
            Export URDF
          </button>
        </div>

        <Scene
          models={models}
          setModels={setModels}
          selectedModel={selectedModel}
          setSelectedModel={setSelectedModel}
        />
      </ManipulationProvider>
    </div>
  );
}
