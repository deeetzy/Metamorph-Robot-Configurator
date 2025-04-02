import React from 'react';
import { useRef } from 'react';

//custom fileInput element to keep same button styling
//FileReaderdoc for future comments and documentation: https://developer.mozilla.org/pt-BR/docs/Web/API/FileReader/load_event
const FileInput = ({className, importCSV, children}) => {
    const inputRef = useRef(null);

    //TODO handle invalid or corrupted files
    const handleFileImport = (e) =>{
        if (e.target.files.length > 0) {
            const reader = new FileReader();

            reader.onload = (event) =>{
                const text = event.target.result;
                importCSV(text); 
            };
            reader.readAsText(e.target.files[0]);
        }
        inputRef.current.value = null;
    };
  
    return (
    <>
        <input type='file' ref={inputRef} className='hidden' accept='.csv' onChange={handleFileImport} />
        <button onClick={()=> inputRef.current?.click()} className={className}>
            {children}
        </button>
    </>
  );
};

export default FileInput;