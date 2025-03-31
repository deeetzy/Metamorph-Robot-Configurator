import React, { useState } from 'react';
import Interface from './components/Interface/Interface';
import Scene from './components/Scene/Scene';
import { ManipulationProvider } from './context/ManipulationContext';

//display at bottom of screen for debug purposes and monitor position updates
function DebugMonitor({ selectedModelId, models, coreModel }) {

  //get selected model from core or models array
  const selected = selectedModelId === coreModel?.id ? coreModel : models.find((model) => model.id === selectedModelId);

  if (!selected) return null;

  return (
    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-black/70 text-white px-6 py-3 rounded-lg text-sm font-mono z-50 shadow-lg backdrop-blur">
      <div>ID: {selected.id}</div>
      <div>Position: [{selected.position.join(', ')}]</div>
      <div>Scale: [{selected.scale.join(', ')}]</div>
      <div>Rotation: [{selected.rotation.join(', ')}]</div>
    </div>
  );
}


//TODO: Flatten Hierarchy of small components to simplify architecture
export default function App() {
  
  // model array where all models are saved
  const [models, setModels] = useState([]);
  // core model, saved seperately for different interaction
  const [coreModel, setCoreModel] = useState(null);
  // selected model which is identified by its ID
  const [selectedModel, setSelectedModel] = useState(null);

  const createModel = (type, path) => {
    const newModel = { 
      id: Date.now(),
      type: type,
      path: path,
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    };

    if (type === 'core subdivision') {
      newModel.position = [0, 0, 0];
    }

    {type === 'core subdivision' ? setCoreModel(newModel) : setModels((prevModels) => [...prevModels, newModel])}
    setSelectedModel(newModel.id);
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
        <Scene coreModel={coreModel} setCoreModel={setCoreModel} models={models} setModels={setModels} selectedModel={selectedModel} setSelectedModel={setSelectedModel} />
        <DebugMonitor selectedModelId={selectedModel} models={models} coreModel={coreModel} />
      </ManipulationProvider>
    </div>
  );
}