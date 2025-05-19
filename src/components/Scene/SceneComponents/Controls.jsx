import React, { useEffect } from 'react';
import { OrbitControls, CameraControls} from '@react-three/drei';
import { useRef } from 'react';

const Controls = ({dragRef}) => {
  const cameraRef = useRef(null);
  //custom onDrag listener to prevent unintended selection of model while dragging
  const handleCameraDrag = (e) => {
    if (!dragRef.current) {
      dragRef.current = true
    }
  };
  
  useEffect(() => {
    if (cameraRef.current) {
      const camera = cameraRef.current;
      camera.addEventListener('control', handleCameraDrag);
      camera.setTarget(0,2,0, false)
    }

  }, []);


  return (
    <>
        <CameraControls makeDefault
            ref={cameraRef}
            minDistance={2}
            maxDistance={15}
            truckSpeed={2}
            onEnd={() => {
              if (dragRef.current) {
                setTimeout(() => {dragRef.current = false;
                }, 50);
              }
              
            }}
        />
    </>
  );
};

export default Controls;