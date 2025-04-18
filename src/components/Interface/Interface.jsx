import React from 'react';
import Sidebar from './InterfaceComponents/Sidebar.jsx';
import MeshManipulation from './InterfaceComponents/MeshManipulation.jsx';

//TODO: flatten hierarchy since this component is so small
const Interface = ({createModel, deleteModel, copyModel, exportCSV, importCSV}) => {
  return (
    <>
      <MeshManipulation 
        deleteModel={deleteModel} 
        copyModel={copyModel}
      />
      <Sidebar 
        createModel={createModel} 
        exportCSV={exportCSV} 
        importCSV={importCSV}
      />
    </>
  );
};

export default Interface;