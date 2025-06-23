import React from 'react';

const ExportButton = ({ vertices, faces }) => {

    const generateOBJ = (vertices, faces) => {
        let obj = '';
        vertices.forEach(v => {
            obj += `v ${v[0]} ${v[1]} ${v[2]}\n`;
        });
        faces.forEach(f => {
            obj += `f ${f[0]+1} ${f[1]+1} ${f[2]+1}\n`;
        });
        return obj;
    };

    const saveToFile = (data, filename) => {
        const blob = new Blob([data], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
    };

    const handleExport = () => {
        const objContent = generateOBJ(vertices, faces);
        saveToFile(objContent, 'model.obj');
    };

    return (
        <button onClick={handleExport}>
            Export OBJ
        </button>
    );
};

export default ExportButton;
