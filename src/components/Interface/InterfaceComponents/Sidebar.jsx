import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import Accordeon from './Accordeon.jsx';
import AccordeonItem from './AccordeonItem.jsx';
import AccordeonSection from './AccordeonSection.jsx';
import modelRegistry from '../../../assets/data/modelRegistry.js';
import FileInput from './FileInput.jsx'

import '../../../App.css';

//TODO: Flatten hierarchy
//for-each Category, make an accordeon
//for-each item, make an accordeonItem with its values.
const Sidebar = ({models, createModel, exportCSV, importCSV}) => {
  //preloading assets
  useEffect(() => {
      Object.entries(modelRegistry).forEach(([categoryName, sections]) => {
        Object.entries(sections).forEach(([sectionName, models]) => {
          Object.entries(models).forEach(([modelName, modelData]) => {
            useGLTF.preload(modelData.path);
          });
        });  
    });
  }, []);

  return (
    <div className='absolute top-0 right-0 h-full w-full sm:max-w-sm 2xl:max-w-md 3xl:max-w-lg z-10 flex flex-col select-none pointer-events-none'>
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
      <div className='flex p-1 h-12 gap-1 mt-0.5 bg-black bg-opacity-5 backdrop-blur-sm rounded-sm pointer-events-auto'>
        <FileInput 
          className={'flex-1 h-full w-full bg-white hover:bg-gray-50 active:bg-gray-200 border border-gray-300  rounded-sm'} 
          importCSV={importCSV}
        >
          Import
        </FileInput>
        <button disabled={models.length === 0} onClick={exportCSV} className={`flex-1 h-full w-full bg-white border border-gray-300 rounded-sm ${ models.length === 0 ? "text-gray-300 opacity-80 shadow-none" : "hover:bg-gray-50 active:bg-gray-200"}`} >Export</button>
      </div>
    </div>
  );
};

export default Sidebar;