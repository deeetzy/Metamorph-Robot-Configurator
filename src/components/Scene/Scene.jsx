import React, { useState, useRef } from 'react';
import { Canvas } from "@react-three/fiber";
import Controls  from "./SceneComponents/Controls.jsx";
import Lighting from "./SceneComponents/Lighting.jsx";
import Model from './SceneComponents/Model.jsx';
import { ManipulationProvider } from '../../context/ManipulationContext';

//TODO: maybe should move this component up since its not too complicatied and needs all parent states?
const Scene = ({ models, setModels, selectedModel, setSelectedModel}) => {

  /*
  potential way of resetting pivotcontrols for better manuverability
  //using this timestamp to stop react from remounting same components on several imports with same ID
  const timestamp = Date.now();
  */
  const updateModelTransformation = (id, position, rotation, scale) => {
    //updating CoreModel values
    //updating normal Model Values
    //loop over model array and if current model found, replace it with copy that has updated values.
    setModels(prev =>
      prev.map(model =>
        (model.id === id ?{...model, position, rotation, scale} : model)
      )
    );
  }

  return (
    
      <Canvas className="z-0">
        <Controls />
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
          />
        ))}
      </Canvas>
  );
};

export default Scene;