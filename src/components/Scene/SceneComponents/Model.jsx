import React, { useState, useRef, useEffect, useMemo } from 'react';
import { PivotControls, Outlines } from '@react-three/drei';

import { useManipulation } from '../../../context/ManipulationContext';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

//TODO: might aswell drill the model as Object since im using every attribute anyway
//TODO: reduce excessive comments after thorough documentation
const Model = ({id, type, path, position, rotation, scale, isSelected, setSelectedModel, updateModelTransformation, dragRef}) => {
  //Manipulation controls state from UI to connect the selected manipulation tool with the pivotcontrols to only show the currently selected tool and not all together to avoid confusion
  const { manipulationControls, setControls } = useManipulation();

  //state to assure model is finished mounting in order to mount Pivotcontrols correctly on the Model
  const [finishedMount, setFinishedMount] = useState(false);

  //save initial rotation as starting value to synchronise rotation of pivotcontrols with rotation of imported model
  const  [startingRotation] = useState(() => rotation);

  //reference to the model
  const modelRef = useRef();

  //render Model from path and copy it for this component, since R3F reuses cached scenes from same paths. with this, multiple models can be rendered from same path
  const { scene } = useGLTF(path);
  const clonedScene = useMemo(() => scene.clone(true), [scene, path]);

  //onMount of component, give the model the correct responsive color design
  //could mess with Models that have an original used material, since this is replacing it in order to highlight current selected model.
  useEffect(() => {
    clonedScene.traverse((child) => {
      if (child.isMesh) {
        const color = isSelected ? '#98aad9' : '#9ea2ad';
        child.material = new THREE.MeshStandardMaterial({ color });
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [isSelected])

  //on mount of component, give the model the desired values from the generated or imported model in models
  useEffect(() => {

    modelRef.current.position.set(...position);
    modelRef.current.rotation.set(...rotation);
    modelRef.current.scale.set(...scale);

    setFinishedMount(true);
  }, []);

  //pivotcontrols wrap around the object and have their own transofmations, they do not affect the model within
  //this method gets the current state of the pivotcontrols and applies them to the parameters of the model
  const applyTransformation = () => {
    //variables for current state of the Pivotcontrols
    const position = new THREE.Vector3();
    const quaternion = new THREE.Quaternion();
    const scale = new THREE.Vector3();
  
    //extract the current state of the pivotcontrols to the variables
    modelRef.current.updateMatrixWorld(true);
    modelRef.current.matrixWorld.decompose(position, quaternion, scale);

    //transform the quaternion to euler angles for easier handling
    const euler = new THREE.Euler().setFromQuaternion(quaternion, 'XYZ').toArray();
    const rotation = euler.slice(0, euler.length - 1);

    //function call in parent component to update models values
    updateModelTransformation(id, position.toArray(), rotation, scale.toArray());
  }

  const handleModelClick = (event, id) => {
    if (dragRef.current) {
      return
    } else {
      event.stopPropagation();
      setSelectedModel(id);
    }
    
  };

  //finishedMount state, since issues were caused by the mounting of Pivotcontrols BEOFRE transformation was applied to the primitive. this fixed it by rendering the primitive and swapping the wrapper with pivotcontrols AFTER it Mounted fully with right coordinates.
  return (
    <>
      {finishedMount ?
      (<PivotControls
        visible={isSelected}
        anchor={[0, 0, 0]}
        rotation={startingRotation}
        scale={1}
        depthTest={false}
        lineWidth={5}
        disableAxes={!manipulationControls.move || !isSelected}
        disableSliders={!manipulationControls.move || !isSelected}
        disableRotations={!manipulationControls.rotate || !isSelected}
        disableScaling={!manipulationControls.scale || !isSelected}
        onDragStart={() => {dragRef.current = true} }
        onDragEnd={() => {
          applyTransformation();
          setTimeout(() => {dragRef.current = false}, 100);
        }}
      >
        <primitive
        ref={modelRef}
        object={clonedScene}
        onClick={(event) => {
          handleModelClick(event, id);
        }}
        />

      </PivotControls>) : 
      (
        <group>
          <primitive
          ref={modelRef}
          object={clonedScene}
          onClick={(event) => {
            handleModelClick(event, id);
          }}
          />
        </group>
      )}
    </>
  );
};

export default Model;