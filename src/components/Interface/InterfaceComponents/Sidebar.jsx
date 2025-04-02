import React from 'react';
import Accordeon from './Accordeon.jsx';
import AccordeonItem from './AccordeonItem.jsx';
import modelRegistry from '../../../assets/data/modelRegistry.js';
import FileInput from './FileInput.jsx'

//TODO: Flatten hierarchy
//TODO:for-each section inside a category, make a section

//for-each Category, make an accordeon

//for-each item, make an accordeonItem with its values.
const Sidebar = ({createModel, exportCSV, importCSV}) => {
  



  return (
    <div className='absolute top-0 right-0 h-full w-1/4 z-10 bg-black bg-opacity-20 flex flex-col'>
      <div className="flex-1 overflow-y-auto">
        
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
      <div className='flex p-1 h-12 gap-1 bg-black bg-opacity-20'>
        <FileInput 
          className={'flex-1 h-full w-full bg-slate-100 rounded-sm'} 
          importCSV={importCSV}
        >
          Import
        </FileInput>
        <button onClick={exportCSV} className='flex-1 h-full w-full bg-slate-100 rounded-sm'>Export</button>
      </div>
    </div>
  );
};

export default Sidebar;