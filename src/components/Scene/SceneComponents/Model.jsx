import React, { useRef, useEffect, useMemo } from 'react';
import { PivotControls } from '@react-three/drei';

import { useManipulation } from '../../../context/ManipulationContext';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';



const Model = ({id, type, path, position, size, isSelected, setSelectedModel}) => {
  const { manipulationControls, setControls } = useManipulation();

  const group = useRef()
  const { scene } = useGLTF(path)
  const clonedScene = useMemo(() => scene.clone(true), [scene, path])
  
  useEffect(() => {
    clonedScene.traverse((child) => {
      if (child.isMesh) {
        const color = type === 'core subdivision' ? (isSelected ? '#637090' : '#919191') : (isSelected ? '#907463' : '#919191')
        child.material = new THREE.MeshStandardMaterial({ color })
        child.material.needsUpdate = true
      }
    })
  }, [isSelected, clonedScene])

  return (
    <PivotControls

      visible={isSelected}
      activeAxes={[!(type === 'core subdivision' && manipulationControls.move), true, !(type === 'core subdivision' && manipulationControls.move)]}
      anchor={[0, 0, 0]}
      rotation={[0, 0, 0]}
      scale={1}
      depthTest={false}
      lineWidth={2}
      disableAxes={!manipulationControls.move || !isSelected}
      disableSliders={!manipulationControls.move || !isSelected}
      disableRotations={!manipulationControls.rotate || !isSelected}
      disableScaling={!manipulationControls.scale || !isSelected}
    >

      <primitive
      ref={group}
      object={clonedScene}
      position={position}
      size={size}
      onClick={(e) => {
        e.stopPropagation()
        setSelectedModel(id)
      }}
    />

    </PivotControls>
  );
};

export default Model;