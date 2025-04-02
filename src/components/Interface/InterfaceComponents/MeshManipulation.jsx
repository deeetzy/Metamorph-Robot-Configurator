import React, { useState } from 'react';
import { useManipulation } from '../../../context/ManipulationContext';

const MeshManipulation = ({deleteModel}) => {
  const { manipulationControls, setControls } = useManipulation();

  return (
    <div className="absolute grid place-items-center gap-2 h-48 w-20 m-2 z-10">
      <button onClick={() => setControls({ move: true, rotate: false, scale: false })} className={`w-28 py-2 border-gray-300 rounded shadow ${manipulationControls.move ? 'bg-slate-200' : 'bg-white'}`}>
        Move
      </button>
      <button onClick={() => setControls({ move: false, rotate: true, scale: false })} className={`w-28 py-2 border-gray-300 rounded shadow ${manipulationControls.rotate ? 'bg-slate-200' : 'bg-white'}`}>
        Rotate
      </button>
      <button onClick={() => setControls({ move: false, rotate: false, scale: true })} className={`w-28 py-2 border-gray-300 rounded shadow ${manipulationControls.scale ? 'bg-slate-200' : 'bg-white'}`}>
        Scale
      </button>

      <div className='my-2'>
      <button onClick={() => deleteModel()} className={`w-28 py-2 border-gray-300 rounded shadow text-red-600  bg-white`}>
        Delete
      </button>

      </div>
      
    </div>
  );
};

export default MeshManipulation;