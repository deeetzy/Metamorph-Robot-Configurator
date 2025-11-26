import React from 'react';
import Sidebar from './InterfaceComponents/Sidebar.jsx';
import MeshManipulation from './InterfaceComponents/MeshManipulation.jsx';

//TODO: flatten hierarchy since this component is so small
const Interface = ({selectedModel, modelsEmpty, createModel, deleteModel, copyModel, exportCSV, importCSV}) => {
  return (
    <>
      <MeshManipulation 
        selectedModel={selectedModel}
        deleteModel={deleteModel} 
        copyModel={copyModel}
      />
      <Sidebar
        modelsEmpty={modelsEmpty}
        createModel={createModel} 
        exportCSV={exportCSV} 
        importCSV={importCSV}
      />
    </>
  );
};

export default Interface;