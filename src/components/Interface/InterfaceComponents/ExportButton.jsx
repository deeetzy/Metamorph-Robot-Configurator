import React from 'react';

const ExportButton = ({ vertices, faces }) => {
const generateOBJ = (vertices, faces) => {
    let obj = '';

    // Write positions
    vertices.forEach(v => {
        obj += `v ${v.pos[0]} ${v.pos[1]} ${v.pos[2]}\n`;
    });

    // Write normals
    vertices.forEach(v => {
        obj += `vn ${v.norm[0]} ${v.norm[1]} ${v.norm[2]}\n`;
    });

    // Write faces (v//vn format, assuming 1:1 vertex:normal index)
    faces.forEach(f => {
        const v1 = f[0] + 1;
        const v2 = f[1] + 1;
        const v3 = f[2] + 1;
        obj += `f ${v1}//${v1} ${v2}//${v2} ${v3}//${v3}\n`;
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
