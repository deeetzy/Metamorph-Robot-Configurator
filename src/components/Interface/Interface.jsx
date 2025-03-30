import React from 'react';
import Sidebar from './InterfaceComponents/Sidebar.jsx';
import MeshManipulation from './InterfaceComponents/MeshManipulation.jsx';


const Interface = ({createModel, deleteModel}) => {
  return (
    <>
      <MeshManipulation deleteModel={deleteModel} />
      <Sidebar createModel = {createModel} />
    </>
  );
};

export default Interface;