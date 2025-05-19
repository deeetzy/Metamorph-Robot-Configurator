import React from 'react';
import { useManipulation } from '../../../context/ManipulationContext';

//Icon Mapping
//https://www.svgrepo.com/svg/533692/move - CC Attribution License
const Move = () => (
    <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier"> 
            <path d="M12 3V21M12 3L9 6M12 3L15 6M12 21L15 18M12 21L9 18M3 12H21M3 12L6 15M3 12L6 9M21 12L18 9M21 12L18 15" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
        </g>
    </svg>
);
//https://www.svgrepo.com/svg/533709/rotate? - CC Attribution License
const Rotate = () => (
    <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier"> 
            <path d="M4.06189 13C4.02104 12.6724 4 12.3387 4 12C4 7.58172 7.58172 4 12 4C14.5006 4 16.7332 5.14727 18.2002 6.94416M19.9381 11C19.979 11.3276 20 11.6613 20 12C20 16.4183 16.4183 20 12 20C9.61061 20 7.46589 18.9525 6 17.2916M9 17H6V17.2916M18.2002 4V6.94416M18.2002 6.94416V6.99993L15.2002 7M6 20V17.2916" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
        </g>
    </svg>
);
//https://www.svgrepo.com/svg/510178/scale-shape - MIT License
const Scale = () => (
    <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier"> 
            <path fillRule="evenodd" clipRule="evenodd" d="M15.9323 9.48196C15.9764 9.64718 16 9.82084 16 10V19C16 20.1046 15.1046 21 14 21H5C3.89543 21 3 20.1046 3 19V10C3 8.89543 3.89543 8 5 8H14C14.1792 8 14.3528 8.02356 14.518 8.06774L17.5858 5H16C15.4477 5 15 4.55228 15 4C15 3.44772 15.4477 3 16 3H20C20.5523 3 21 3.44772 21 4V8C21 8.55228 20.5523 9 20 9C19.4477 9 19 8.55228 19 8V6.41421L15.9323 9.48196ZM14 19H5V10H14V19Z" fill="#000000"></path> 
        </g>
    </svg>
);
//https://www.svgrepo.com/svg/506467/copy - MIT License
const Copy = ({stroke}) => (
    <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier"> 
            <path d="M19.53 8L14 2.47C13.8595 2.32931 13.6688 2.25018 13.47 2.25H11C10.2707 2.25 9.57118 2.53973 9.05546 3.05546C8.53973 3.57118 8.25 4.27065 8.25 5V6.25H7C6.27065 6.25 5.57118 6.53973 5.05546 7.05546C4.53973 7.57118 4.25 8.27065 4.25 9V19C4.25 19.7293 4.53973 20.4288 5.05546 20.9445C5.57118 21.4603 6.27065 21.75 7 21.75H14C14.7293 21.75 15.4288 21.4603 15.9445 20.9445C16.4603 20.4288 16.75 19.7293 16.75 19V17.75H17C17.7293 17.75 18.4288 17.4603 18.9445 16.9445C19.4603 16.4288 19.75 15.7293 19.75 15V8.5C19.7421 8.3116 19.6636 8.13309 19.53 8ZM14.25 4.81L17.19 7.75H14.25V4.81ZM15.25 19C15.25 19.3315 15.1183 19.6495 14.8839 19.8839C14.6495 20.1183 14.3315 20.25 14 20.25H7C6.66848 20.25 6.35054 20.1183 6.11612 19.8839C5.8817 19.6495 5.75 19.3315 5.75 19V9C5.75 8.66848 5.8817 8.35054 6.11612 8.11612C6.35054 7.8817 6.66848 7.75 7 7.75H8.25V15C8.25 15.7293 8.53973 16.4288 9.05546 16.9445C9.57118 17.4603 10.2707 17.75 11 17.75H15.25V19ZM17 16.25H11C10.6685 16.25 10.3505 16.1183 10.1161 15.8839C9.8817 15.6495 9.75 15.3315 9.75 15V5C9.75 4.66848 9.8817 4.35054 10.1161 4.11612C10.3505 3.8817 10.6685 3.75 11 3.75H12.75V8.5C12.7526 8.69811 12.8324 8.88737 12.9725 9.02747C13.1126 9.16756 13.3019 9.24741 13.5 9.25H18.25V15C18.25 15.3315 18.1183 15.6495 17.8839 15.8839C17.6495 16.1183 17.3315 16.25 17 16.25Z" fill={stroke}></path>
        </g>
    </svg>
);
//https://www.svgrepo.com/svg/502608/delete-2 - PD License
const Delete = ({stroke}) => (
    <svg  stroke={stroke} width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier"> 
            <path d="M10 12V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
            <path d="M14 12V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
            <path d="M4 7H20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
            <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
            <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
        </g>
    </svg>
);
const iconMap = {
    move: Move,
    rotate: Rotate,
    scale: Scale,
    copy: Copy,
    delete: Delete,
};

const Button = ({selectedModel, type, onClick,  children}) => {
    const { manipulationControls, setControls } = useManipulation();
    const ChosenIcon = type ?  iconMap[type] : null;

  return (
    <button 
        className={`flex flex-row gap-x-2 items-center w-28 px-3 py-2 border border-gray-300 rounded shadow-sm
                    ${manipulationControls[type] ? 'bg-gray-200' : 'bg-white'}
                    ${ !selectedModel && (type == "copy" || type == "delete") ? "text-gray-300 opacity-80 shadow-none" : "hover:bg-gray-50 active:bg-gray-200"} 
                `}
        disabled={!selectedModel && (type == "copy" || type == "delete")} 
        onClick={onClick} 
    >
        <div className='flex justify-center w-7 h-7 flex-shrink-0'>
            <ChosenIcon stroke={(type == "delete") ? (!selectedModel ? "#e2e8f0" : "#dc2626"):(!selectedModel ? "#e2e8f0" : "#000000") } /> 
        </div>
        <span className={`${!selectedModel && (type == "copy" || type == "delete") ? "text-gray-300" : (type === 'delete' ? 'text-red-600' : 'text-gray-800')}`}>{children}</span>
    </button>
    

  );
};

export default Button;