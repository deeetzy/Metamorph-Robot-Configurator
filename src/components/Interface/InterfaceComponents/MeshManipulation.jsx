import React, { useState } from 'react';
import { useManipulation } from '../../../context/ManipulationContext';

const MeshManipulation = ({deleteModel}) => {
  const { manipulationControls, setControls } = useManipulation();

  return (
    <div className="absolute grid place-items-center h-48 w-20 z-10">
      <button onClick={() => setControls({ move: true, rotate: false, scale: false })} className={`px-4 py-2 border-gray-300 rounded shadow ${manipulationControls.move ? 'bg-gray-200' : 'bg-white'}`}>
        M
      </button>
      <button onClick={() => setControls({ move: false, rotate: true, scale: false })} className={`px-4 py-2 border-gray-300 rounded shadow ${manipulationControls.rotate ? 'bg-gray-200' : 'bg-white'}`}>
        R
      </button>
      <button onClick={() => setControls({ move: false, rotate: false, scale: true })} className={`px-4 py-2 border-gray-300 rounded shadow ${manipulationControls.scale ? 'bg-gray-200' : 'bg-white'}`}>
        S
      </button>
      <button onClick={() => deleteModel()} className={`px-4 py-2 border-gray-300 rounded shadow text-red-600  bg-white`}>
        D
      </button>
    </div>
  );
};

export default MeshManipulation;