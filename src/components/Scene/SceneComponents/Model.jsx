import React, { useRef, useEffect, useMemo } from 'react';
import { PivotControls } from '@react-three/drei';

import { useManipulation } from '../../../context/ManipulationContext';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';


const Model = ({id, type, path, isSelected, setSelectedModel, updateModelTransformation}) => {
  const { manipulationControls, setControls } = useManipulation();


  const group = useRef()
  const { scene } = useGLTF(path)
  const clonedScene = useMemo(() => scene.clone(true), [scene, path])
  
  useEffect(() => {
    clonedScene.traverse((child) => {
      if (child.isMesh) {
        const color = type === 'core subdivision' ? (isSelected ? '#637090' : '#919191') : (isSelected ? '#907463' : '#919191')
        child.material = new THREE.MeshStandardMaterial({ color })
      }
    })
  }, [isSelected, clonedScene])

  //pivotcontrols wrap around the object and have their own transofmations, they do not affect the model within
  //this method gets the current state of the pivotcontrols and applies them to the parameters of the model
  const applyTransformation = () => {
    //variables for current state of the Pivotcontrols
    const position = new THREE.Vector3();
    const quaternion = new THREE.Quaternion();
    const scale = new THREE.Vector3();
  
    //extract the current state of the pivotcontrols to the variables
    group.current.updateMatrixWorld(true);
    group.current.matrixWorld.decompose(position, quaternion, scale);

    //transform the quaternion to euler angles for easier handling
    const euler = new THREE.Euler().setFromQuaternion(quaternion, 'XYZ').toArray();
    const rotation = euler.slice(0, euler.length - 1);

    //function call in parent component to update models values
    updateModelTransformation(id, position.toArray(), rotation, scale.toArray());
  }

  return (
    <PivotControls
      visible={isSelected}
      activeAxes={[!(type === 'core subdivision' && manipulationControls.move), true, !(type === 'core subdivision' && manipulationControls.move)]}
      anchor={[0, 0, 0]}
      rotation={[0, 0, 0]}
      scale={1}
      depthTest={false}
      lineWidth={5}
      disableAxes={!manipulationControls.move || !isSelected}
      disableSliders={!manipulationControls.move || !isSelected}
      disableRotations={!manipulationControls.rotate || !isSelected}
      disableScaling={!manipulationControls.scale || !isSelected}
      onDragEnd={applyTransformation}
    >
      <primitive
      ref={group}
      object={clonedScene}
      onClick={(e) => {
        e.stopPropagation()
        setSelectedModel(id)
      }}
    />

    </PivotControls>
  );
};

export default Model;