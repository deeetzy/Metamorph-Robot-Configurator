import React from 'react';


const Lighting = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight castShadow position={[2.5, 5, 5]} intensity={1.4} />
    </>
  );
};

export default Lighting;