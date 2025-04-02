import React, { useState } from 'react';
import { Canvas } from "@react-three/fiber";
import Controls  from "./SceneComponents/Controls.jsx";
import Lighting from "./SceneComponents/Lighting.jsx";
import Model from './SceneComponents/Model.jsx';
import { ManipulationProvider } from '../../context/ManipulationContext';

//TODO: maybe should move this component up since its not too complicatied and needs all parent states?
const Scene = ({coreModel, setCoreModel, models, setModels, selectedModel, setSelectedModel}) => {
  
  const updateModelTransformation = (id, position, rotation, scale) => {
    //updating CoreModel values
    if(coreModel?.id === id){
      //copies all values of Model into new object, and overwrites every value we give in argument.
      setCoreModel(prev=>({...prev, position, rotation, scale}));
    } else{
      //updating normal Model Values
      //loop over model array and if current model found, replace it with copy that has updated values.
      setModels(prev =>
        prev.map(model =>
          (model.id === id ?{...model, position, rotation, scale} : model)
        )
      );
    }
  }
  

  return (
    
      <Canvas className="z-0">
        <Controls />
        <Lighting />

        {coreModel && (
          <Model
            key={coreModel.id}
            id={coreModel.id}
            type={coreModel.type}
            path={coreModel.path}
            position={coreModel.position}
            rotation={coreModel.rotation}
            scale={coreModel.scale}
            isSelected={selectedModel === coreModel.id}
            setSelectedModel={setSelectedModel}
            updateModelTransformation={updateModelTransformation}
          />
        )}

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