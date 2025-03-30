import React, { useState } from 'react';
import { Canvas } from "@react-three/fiber";
import Controls  from "./SceneComponents/Controls.jsx";
import Lighting from "./SceneComponents/Lighting.jsx";
import Model from './SceneComponents/Model.jsx';
import { ManipulationProvider } from '../../context/ManipulationContext';

const Scene = ({coreModel, models, selectedModel, setSelectedModel}) => {
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
            size={coreModel.size}
            isSelected={selectedModel === coreModel.id}
            setSelectedModel={setSelectedModel}
          />
        )}

        {models.map((model) =>(
          <Model
            key={model.id}
            id={model.id}
            type={model.type}
            path={model.path}
            position={model.position}
            size={model.size}
            isSelected={selectedModel === model.id}
            setSelectedModel={setSelectedModel}
          />
        ))}
      </Canvas>
  );
};

export default Scene;