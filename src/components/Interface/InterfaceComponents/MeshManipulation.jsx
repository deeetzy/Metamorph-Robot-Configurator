import React, { useState } from 'react';
import { useManipulation } from '../../../context/ManipulationContext';
import Button from './Button.jsx';

const MeshManipulation = ({selectedModel, deleteModel, copyModel}) => {
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
      <Button
      type={"move"}
      onClick={() => changeActiveControls('move')}
      >
        Move
      </Button>
      <Button
      type={"rotate"}
      onClick={() => changeActiveControls('rotate')}
      >
        Rotate
      </Button>
      <Button
      type={"scale"}
      onClick={() => changeActiveControls('scale')}
      >
        Scale
      </Button>

      <div className='grid place-items-center gap-2 mt-4'>
        <Button
          selectedModel={selectedModel}
          type={"copy"}
          onClick={() =>{copyModel(); changeActiveControls('move');}}
        >
          Copy
        </Button>

        <Button
          selectedModel={selectedModel}
          type={"delete"}
          onClick={() => deleteModel()}
        >
          Delete
        </Button>  
      </div>
      
    </div>
  );
};

export default MeshManipulation;