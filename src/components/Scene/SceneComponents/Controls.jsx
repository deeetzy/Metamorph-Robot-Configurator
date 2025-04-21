import React, { useEffect } from 'react';
import { OrbitControls, CameraControls} from '@react-three/drei';
import { useRef } from 'react';

const Controls = () => {
  const cameraRef = useRef();

  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.setTarget(0,2,0, false);
    }

  }, []);


  return (
    <>
        <CameraControls makeDefault
          ref={cameraRef}
            minDistance={2}
            maxDistance={15}
            truckSpeed={0}
        />
    </>
  );
};

export default Controls;






