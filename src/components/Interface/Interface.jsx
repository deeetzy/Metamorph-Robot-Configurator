import React from 'react';
import Sidebar from './InterfaceComponents/Sidebar.jsx';
import MeshManipulation from './InterfaceComponents/MeshManipulation.jsx';

//TODO: flatten hierarchy since this component is so small
const Interface = ({createModel, deleteModel, exportCSV, importCSV}) => {
  return (
    <>
      <MeshManipulation 
        deleteModel={deleteModel} 
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