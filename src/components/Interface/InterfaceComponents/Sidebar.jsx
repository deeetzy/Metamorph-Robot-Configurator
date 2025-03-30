import React from 'react';
import Accordeon from './Accordeon.jsx';
import AccordeonItem from './AccordeonItem.jsx';
import modelRegistry from '../../../assets/data/modelRegistry.js';


const Sidebar = ({createModel}) => {
  return (
    <div className="absolute top-0 right-0 h-full w-1/4 z-10 bg-black bg-opacity-20">
      {Object.entries(modelRegistry).map(([category, models]) => (
      <Accordeon key={category} header={category}>
        {Object.entries(models).map(([modelName, modelData]) => (
        <AccordeonItem 
          key={modelName} 
          type={modelData.type}
          img={modelData.img}
          path={modelData.path}
          createModel = {createModel}
        />
        ))}
      </Accordeon>
      ))}
    </div>
  );
};

export default Sidebar;