import React, { createContext, useContext, useState } from 'react';
import { KeyboardControls } from '@react-three/drei';

const ManipulationContext = createContext();

export const useManipulation = () => useContext(ManipulationContext);

export const ManipulationProvider = ({ children }) => {
  const [manipulationControls, setControls] = useState({
    move: true,
    rotate: false,
    scale: false,
  });

  return (
    <ManipulationContext.Provider value={{ manipulationControls, setControls}}>
      {children}
    </ManipulationContext.Provider>
  );
};