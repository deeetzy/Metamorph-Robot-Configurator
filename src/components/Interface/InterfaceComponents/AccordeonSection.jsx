import React from 'react';


const AccordeonSection = ({sectionTitle='Lmao', children}) => {
  return (
    <div className=' w-full p-1 bg-black bg-opacity-10 backdrop-blur-sm rounded-sm'>
      <div className='text-xs text-slate-900 border-b border-slate-700 leading-none mb-[-2px]'>
        {sectionTitle}
      </div>
      <div className='grid grid-cols-4 place-items-center gap-1.5 pt-1.5'>
        {children}
      </div>
    </div>
    
    
  );
};

export default AccordeonSection;