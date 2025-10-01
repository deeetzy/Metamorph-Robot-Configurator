import React, { useState, useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";
import Controls  from "./SceneComponents/Controls.jsx";
import Lighting from "./SceneComponents/Lighting.jsx";
import Ground from "./SceneComponents/Ground.jsx";
import Model from './SceneComponents/Model.jsx';
import { ManipulationProvider } from '../../context/ManipulationContext';
import modelRegistry from '../../assets/data/modelRegistry.js';


const Scene = ({ models, setModels, selectedModel, setSelectedModel}) => {
  //base Directory in puiblic where models are saved
  const modelBaseDir = '/assets/';

  useEffect(() => {
      Object.entries(modelRegistry).forEach(([categoryName, sections]) => {
        Object.entries(sections).forEach(([sectionName, models]) => {
          Object.entries(models).forEach(([modelName, modelData]) => {
            useGLTF.preload(modelBaseDir + modelData.path);
          });
        });  
    });
  }, []);



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
            path={modelBaseDir + model.path}
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