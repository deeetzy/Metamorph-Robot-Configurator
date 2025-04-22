import React from 'react';
import Accordeon from './Accordeon.jsx';
import AccordeonItem from './AccordeonItem.jsx';
import AccordeonSection from './AccordeonSection.jsx';
import modelRegistry from '../../../assets/data/modelRegistry.js';
import FileInput from './FileInput.jsx'

import '../../../App.css';

//TODO: Flatten hierarchy
//for-each Category, make an accordeon
//for-each item, make an accordeonItem with its values.
const Sidebar = ({createModel, exportCSV, importCSV}) => {
  



  return (
    <div className='absolute top-0 right-0 h-full w-1/4 z-10 flex flex-col'>
      <div className="flex-1 overflow-y-auto scrollbar">
        
        {Object.entries(modelRegistry).map(([category, sections]) => (
        <Accordeon key={category} header={category}>
          {Object.entries(sections).map(([sectionName, models]) => (
          <AccordeonSection key={sectionName} sectionTitle={sectionName}>
            {Object.entries(models).map(([modelName, modelData]) => (
            <AccordeonItem 
              key={modelName} 
              name={modelData.name}
              type={modelData.type}
              img={modelData.img}
              path={modelData.path}
              createModel = {createModel}
            />
            ))}
          </AccordeonSection>
          ))}
        </Accordeon>
        ))}
      </div>
      <div className='flex p-1 h-12 gap-1 mt-0.5 bg-black bg-opacity-5 backdrop-blur-sm rounded-sm'>
        <FileInput 
          className={'flex-1 h-full w-full bg-white rounded-sm'} 
          importCSV={importCSV}
        >
          Import
        </FileInput>
        <button onClick={exportCSV} className='flex-1 h-full w-full bg-white rounded-sm'>Export</button>
      </div>
    </div>
  );
};

export default Sidebar;