import React, { useEffect } from 'react';


const Alert = ({message, visible, setVisible}) => {

    useEffect(() => {
        const alertTime = setTimeout(() => {
            setVisible(false);
        }, 3000);
        return () => clearTimeout(alertTime);
    }, []);
    
    return (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 px-4 py-4 text-black bg-black bg-opacity-10 backdrop-blur-sm rounded-sm ">{message}</div>
    );
};

export default Alert;