import React from 'react';


const AccordeonItem = ({name, type, img, path, createModel}) => {
  return (
    <button title={name} onClick={() => createModel(type, path)} className="w-full h-full bg-gray-800  rounded-sm shadow">
      <img src={"/Pictures/" + img} className="h-full w-full object-cover rounded-sm hover:opacity-80 active:opacity-50" />
    </button>
  );
};

export default AccordeonItem;