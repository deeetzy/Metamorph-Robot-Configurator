import React from 'react';


const AccordeonItem = ({type, img, path, createModel}) => {
  return (
    <button onClick={() => createModel(type, path)} className="h-22 w-22 bg-white rounded-sm shadow">
      <img src={"/Pictures/" + img} className="h-full w-full object-cover rounded-sm" />
    </button>
  );
};

export default AccordeonItem;