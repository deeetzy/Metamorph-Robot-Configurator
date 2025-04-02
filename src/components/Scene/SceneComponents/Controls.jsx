import React from 'react';
import { OrbitControls, CameraControls} from '@react-three/drei';

const Controls = () => {
  return (
    <>
        <CameraControls makeDefault
            minDistance={5}
            maxDistance={15}
            truckSpeed={0}
        />
    </>
  );
};

export default Controls;






