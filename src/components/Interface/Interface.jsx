import React from 'react';
import Sidebar from './InterfaceComponents/Sidebar.jsx';
import MeshManipulation from './InterfaceComponents/MeshManipulation.jsx';

//TODO: flatten hierarchy since this component is so small
const Interface = ({models, selectedModel, createModel, deleteModel, copyModel, exportCSV, importCSV}) => {
  return (
    <>
      <MeshManipulation 
        selectedModel={selectedModel}
        deleteModel={deleteModel} 
        copyModel={copyModel}
      />
      <Sidebar
        models={models}
        createModel={createModel} 
        exportCSV={exportCSV} 
        importCSV={importCSV}
      />
    </>
  );
};

export default Interface;