import React, { useState } from 'react';
import Interface from './components/Interface/Interface';
import Scene from './components/Scene/Scene';
import Alert from './components/Interface/InterfaceComponents/Alert';
import { ManipulationProvider } from './context/ManipulationContext';
import FileSaver from 'file-saver';

//TODO: Flatten Hierarchy of small components to simplify architecture
//TODO: maybe Models and selected models in neuen Context oder store verfrachten
//TODO: Put all model logic and alteration functionality into a context, similar to meshmanipulation
export default function App() {
  
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
  }

  const copyModel = () => {
    const copiedModel = models.find((model) => model.id === selectedModel);
    createModel(copiedModel.type, copiedModel.path, Date.now(),copiedModel.position, copiedModel.rotation, copiedModel.scale);
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
    //is header even needed if CSV is only for import purposes?
    const header = 'id, type, path, position, rotation, scale\n';
    var modelRows = '';

    if (models.length < 1) {
      return;
    }
    //stringify in order to have correct csv formatting
    //append core model first and then every other model
    if (models.length > 0){
      models.forEach(model => {
        modelRows += `${model.id},${model.type},${model.path},${JSON.stringify(model.position).replaceAll(",", "|")},${JSON.stringify(model.rotation).replaceAll(",", "|")},${JSON.stringify(model.scale).replaceAll(",", "|")}\n`;
      });
    }
    
    const csv = header + modelRows;

    //generate csv file, then download with FileSaver
    const csvFile = new Blob([csv], {type: 'text/csv'});
    FileSaver.saveAs(csvFile, 'Robot_Configuration.csv');
  };

  //TODO Refactor into something more elegant, this is only a temporary solution and doesnt handle edge cases well
  //swap Arguments in createModel, so the arguments can be in order
  const importCSV = (csvData) => {
    const timestamp = Date.now();

    setModels([]);

    var csvRows = csvData.split('\n');
    csvRows.splice(0, 1);
    csvRows = csvRows.filter(row => row.trim() != '');

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


  return (
    <div className='relative h-full w-full'>
      <ManipulationProvider>
        {visible &&
        <Alert
        message={alertMessage}
        visible={visible}
        setVisible={setVisible}
      />
        }
        
        <Interface 
          selectedModel={selectedModel}
          modelsEmpty={!models.length}
          createModel={createModel}
          deleteModel={deleteSelectedModel}
          copyModel={copyModel}
          exportCSV={exportCSV} 
          importCSV={importCSV}
        />
        <Scene 
          models={models} 
          setModels={setModels} 
          selectedModel={selectedModel} 
          setSelectedModel={setSelectedModel} 
        />
      </ManipulationProvider>
    </div>
  );
};