import React, { useState } from 'react';
import Interface from './components/Interface/Interface';
import Scene from './components/Scene/Scene';
import { ManipulationProvider } from './context/ManipulationContext';




export default function App() {
  // model array where all models are saved as objects
  const [coreModel, setCoreModel] = useState(null);
  const [models, setModels] = useState([]);
  // selected model which is identified by its ID
  const [selectedModel, setSelectedModel] = useState(null);

  const createModel = (type, path) => {
    const id = Date.now();
    var position = [Math.random() * 2, Math.random() * 2, Math.random() * 2];
    var size = [1, 1, 1];
    var type = type;

    if (type === 'core subdivision') {
      position = [0, 0, 0];
    }

    const newModel = { 
      id: id,
      type: type,
      position: position,
      size: size,
      path: path,
    };
    
    {type === 'core subdivision' ? setCoreModel(newModel) : setModels((prevModels) => [...prevModels, newModel])}
  }

  const deleteSelectedModel = (id) => {
    if (selectedModel !== null) {
      const updatedModels = models.filter((model) => model.id !== selectedModel);
      setModels(updatedModels);
      setSelectedModel(null);
    }
  }

  return (
    <div className='relative h-full w-full'>
      <ManipulationProvider>
        <Interface createModel = {createModel} deleteModel={deleteSelectedModel} />
        <Scene coreModel={coreModel} models={models} selectedModel={selectedModel} setSelectedModel={setSelectedModel} />
      </ManipulationProvider>
    </div>
  );
}