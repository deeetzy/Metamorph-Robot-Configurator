import React, { useState } from 'react';


const Accordeon = ({header, children}) => {
  const [open, setOpen] = useState(true);

  return (
    <div className='pt-2'>
      <div
        onClick={() => setOpen(!open)} 
        className='p-5 mb-1 bg-white rounded-sm flex items-center justify-between'
      >
        <div>
          <h1 className='text-slate-900'>{header}</h1>
        </div>
        <div className={open ? '' : '-rotate-90'}>
          <svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 1L10 10L1 1" stroke="black"/>
          </svg>
        </div>
      </div>
        
      {open && <div className="grid grid-cols-1 place-items-center gap-0.5"> {children} </div>}
    </div>
  );
};

export default Accordeon;