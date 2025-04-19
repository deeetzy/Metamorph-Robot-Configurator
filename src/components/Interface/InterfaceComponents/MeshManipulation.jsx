import React, { useState } from 'react';
import { useManipulation } from '../../../context/ManipulationContext';

const MeshManipulation = ({deleteModel, copyModel}) => {
  const { manipulationControls, setControls } = useManipulation();

  const changeActiveControls = (controlType) =>{
    switch (controlType) {
      case 'move':
        setControls({ move: true, rotate: false, scale: false })
        return;
      
      case 'rotate':
        setControls({ move: false, rotate: true, scale: false })
        return;
    
      case 'scale':
        setControls({ move: false, rotate: false, scale: true })
        return;
      
      default:
        return;
    }
  };

  return (
    <div className="absolute grid place-items-center gap-2 h-48 w-20 m-2 z-10">
      <button onClick={() => changeActiveControls('move')} className={`w-20 py-2 border-gray-300 rounded shadow ${manipulationControls.move ? 'bg-gray-100' : 'bg-white'}`}>
        Move
      </button>
      <button onClick={() => changeActiveControls('rotate')} className={`w-20 py-2 border-gray-300 rounded shadow ${manipulationControls.rotate ? 'bg-gray-100' : 'bg-white'}`}>
        Rotate
      </button>
      <button onClick={() => changeActiveControls('scale')} className={`w-20 py-2 border-gray-300 rounded shadow ${manipulationControls.scale ? 'bg-gray-100' : 'bg-white'}`}>
        Scale
      </button>

      <div className='my-2 gap-y-2'>
      <button onClick={() =>{copyModel(); changeActiveControls('move');}} className={`w-20 py-2 border-gray-300 rounded shadow bg-white`}>
        Copy
      </button>
      <button onClick={() => deleteModel()} className={`w-20 py-2 border-gray-300 rounded shadow text-red-600  bg-white`}>
        Delete
      </button>

      </div>
      
    </div>
  );
};

export default MeshManipulation;