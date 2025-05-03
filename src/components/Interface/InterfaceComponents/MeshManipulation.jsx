import React, { useState } from 'react';
import { useManipulation } from '../../../context/ManipulationContext';

const MeshManipulation = ({deleteModel, copyModel}) => {
  const { manipulationControls, setControls } = useManipulation();

  const changeActiveControls = (controlType) =>{
    switch (controlType) {
      case 'move':
        setControls({ move: true, rotate: false, scale: false })
        return;
      
      case 'rotate':
        setControls({ move: false, rotate: true, scale: false })
        return;
    
      case 'scale':
        setControls({ move: false, rotate: false, scale: true })
        return;
      
      default:
        return;
    }
  };

  return (
    //TODO: Doublecheck if changes in SVG were made and if so, document them and credit them
    //https://www.svgrepo.com/svg/521187/move - CC Attribution License
    //https://www.svgrepo.com/svg/533709/rotate? - CC Attribution License
    //https://www.svgrepo.com/svg/510178/scale-shape - MIT License
    //https://www.svgrepo.com/svg/510388/copy - MIT License
    //https://www.svgrepo.com/svg/502608/delete-2 - PD License
    <div className="absolute grid place-items-center gap-2 h-48 w-20 m-2 z-10">
      <button onClick={() => changeActiveControls('move')} className={`flex flex-row gap-x-2 justify-center items-center w-28 py-2 border-gray-300 rounded shadow ${manipulationControls.move ? 'bg-gray-300' : 'bg-white'}`}>
        <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12.0001 2.89331L8.81809 6.07529L9.87875 7.13595L11.2501 5.76463V11.2499H5.7649L7.13619 9.8786L6.07553 8.81794L2.89355 11.9999L6.07553 15.1819L7.13619 14.1212L5.76485 12.7499H11.2501V18.2352L9.87875 16.8639L8.81809 17.9245L12.0001 21.1065L15.182 17.9245L14.1214 16.8639L12.7501 18.2352V12.7499H18.2353L16.8639 14.1213L17.9246 15.1819L21.1066 11.9999L17.9246 8.81796L16.8639 9.87862L18.2352 11.2499H12.7501V5.76463L14.1214 7.13595L15.182 6.07529L12.0001 2.89331Z" fill="#080341"></path> </g></svg>
        <span>Move</span>
      </button>
      <button onClick={() => changeActiveControls('rotate')} className={`flex flex-row gap-x-2 justify-center items-center w-28 py-2 border-gray-300 rounded shadow ${manipulationControls.rotate ? 'bg-gray-300' : 'bg-white'}`}>
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.06189 13C4.02104 12.6724 4 12.3387 4 12C4 7.58172 7.58172 4 12 4C14.5006 4 16.7332 5.14727 18.2002 6.94416M19.9381 11C19.979 11.3276 20 11.6613 20 12C20 16.4183 16.4183 20 12 20C9.61061 20 7.46589 18.9525 6 17.2916M9 17H6V17.2916M18.2002 4V6.94416M18.2002 6.94416V6.99993L15.2002 7M6 20V17.2916" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        <span>Rotate</span>
      </button>
      <button onClick={() => changeActiveControls('scale')} className={`flex flex-row gap-x-2 justify-center items-center w-28 py-2 border-gray-300 rounded shadow ${manipulationControls.scale ? 'bg-gray-300' : 'bg-white'}`}>
        <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M15.9323 9.48196C15.9764 9.64718 16 9.82084 16 10V19C16 20.1046 15.1046 21 14 21H5C3.89543 21 3 20.1046 3 19V10C3 8.89543 3.89543 8 5 8H14C14.1792 8 14.3528 8.02356 14.518 8.06774L17.5858 5H16C15.4477 5 15 4.55228 15 4C15 3.44772 15.4477 3 16 3H20C20.5523 3 21 3.44772 21 4V8C21 8.55228 20.5523 9 20 9C19.4477 9 19 8.55228 19 8V6.41421L15.9323 9.48196ZM14 19H5V10H14V19Z" fill="#000000"></path> </g></svg>
        <span>Scale</span>
      </button>

      <button onClick={() =>{copyModel(); changeActiveControls('move');}} className={`flex flex-row gap-x-2 justify-center items-center w-28 py-2 mt-4 border-gray-300 rounded shadow bg-white`}>
        <svg width="28px" height="28px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M48.186 92.137c0-8.392 6.49-14.89 16.264-14.89s29.827-.225 29.827-.225-.306-6.99-.306-15.88c0-8.888 7.954-14.96 17.49-14.96 9.538 0 56.786.401 61.422.401 4.636 0 8.397 1.719 13.594 5.67 5.196 3.953 13.052 10.56 16.942 14.962 3.89 4.402 5.532 6.972 5.532 10.604 0 3.633 0 76.856-.06 85.34-.059 8.485-7.877 14.757-17.134 14.881-9.257.124-29.135.124-29.135.124s.466 6.275.466 15.15-8.106 15.811-17.317 16.056c-9.21.245-71.944-.49-80.884-.245-8.94.245-16.975-6.794-16.975-15.422s.274-93.175.274-101.566zm16.734 3.946l-1.152 92.853a3.96 3.96 0 0 0 3.958 4.012l73.913.22a3.865 3.865 0 0 0 3.91-3.978l-.218-8.892a1.988 1.988 0 0 0-2.046-1.953s-21.866.64-31.767.293c-9.902-.348-16.672-6.807-16.675-15.516-.003-8.709.003-69.142.003-69.142a1.989 1.989 0 0 0-2.007-1.993l-23.871.082a4.077 4.077 0 0 0-4.048 4.014zm106.508-35.258c-1.666-1.45-3.016-.84-3.016 1.372v17.255c0 1.106.894 2.007 1.997 2.013l20.868.101c2.204.011 2.641-1.156.976-2.606l-20.825-18.135zm-57.606.847a2.002 2.002 0 0 0-2.02 1.988l-.626 96.291a2.968 2.968 0 0 0 2.978 2.997l75.2-.186a2.054 2.054 0 0 0 2.044-2.012l1.268-62.421a1.951 1.951 0 0 0-1.96-2.004s-26.172.042-30.783.042c-4.611 0-7.535-2.222-7.535-6.482S152.3 63.92 152.3 63.92a2.033 2.033 0 0 0-2.015-2.018l-36.464-.23z" stroke="#000000" fillRule="evenodd"></path> </g></svg>
        <span>Copy</span>
      </button>
      <button onClick={() => deleteModel()} className={`flex flex-row gap-x-2 justify-center items-center w-28 py-2 border-gray-300 rounded shadow text-red-600  bg-white`}>
        <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 12V17" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M14 12V17" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M4 7H20" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        <span>Delete</span>
      </button>
      
    </div>
  );
};

export default MeshManipulation;