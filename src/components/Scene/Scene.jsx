import React, { useState, useRef, useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import Controls  from "./SceneComponents/Controls.jsx";
import Lighting from "./SceneComponents/Lighting.jsx";
import Model from './SceneComponents/Model.jsx';
import { ManipulationProvider } from '../../context/ManipulationContext';
import { Grid } from '@react-three/drei';

//TODO: maybe should move this component up since its not too complicatied and needs all parent states?
const Scene = ({ models, setModels, selectedModel, setSelectedModel}) => {
  //Ref to disable Model selection while dragging pivotcontrols of the currently seelcted model
  //Fixes bug where another model gets instantly selected when ending drag with mouse on not selected model
  const dragRef = useRef(false);

  /*
  potential way of resetting pivotcontrols for better manuverability
  //using this timestamp to stop react from remounting same components on several imports with same ID
  const timestamp = Date.now();
  */
  const updateModelTransformation = (id, position, rotation, scale) => {
    //updating normal Model Values
    //loop over model array and if current model found, replace it with copy that has updated values.
    setModels(prev =>
      prev.map(model =>
        (model.id === id ?{...model, position, rotation, scale} : model)
      )
    );
  }

  //for testing purposes: https://codesandbox.io/p/sandbox/sew669?file=%2Fsrc%2FApp.js%3A4%2C10-4%2C14
  function Ground() {
    const gridConfig = {
      cellSize: 0.3,
      cellThickness: 1.5,
      cellColor: '#3f3f3f',
      sectionSize: 3,
      sectionThickness: 1.5,
      sectionColor: '#213964',
      fadeDistance: 15,
      fadeStrength: 2,
      followCamera: true,
      infiniteGrid: true,
    }
    return (
      <Grid position={[0, -0.01, 0]} args={[10.5, 10.5]} {...gridConfig} />
    );
  }

  return (
    
      <Canvas 
      
      camera={{ position: [-3, 3, 3], fov: 60 }} className="z-0"
      onClick={(e)=>{
        if (e.detail < 2) {
          return
        } else {
          setSelectedModel(null);
          }}}
      onDragStart={() => {dragRef.current = true} }
      onDragEnd={() => {
        applyTransformation();
        setTimeout(() => {dragRef.current = false}, 100);
      }}
      >
        <Controls dragRef={dragRef} />
        <Lighting />

        {models.map((model) =>(
          <Model
            key={model.id}
            id={model.id}
            type={model.type}
            path={model.path}
            position={model.position}
            rotation={model.rotation}
            scale={model.scale}
            isSelected={selectedModel === model.id}
            setSelectedModel={setSelectedModel}
            updateModelTransformation={updateModelTransformation}
            dragRef={dragRef}
          />
        ))}
        <Ground />
      </Canvas>
  );
};

export default Scene;