const modelRegistry = {
    'Core Subdivision':{
        cube: {
            name: 'Cube',
            type: 'core subdivision',
            img: 'cube.jpg',
            path: '/Assets/Cube-transformed.glb',
        },
        rounded: {
            name: 'rounded',
            type: 'core subdivision',
            img: 'rounded.jpg',
            path: '/Assets/Rounded_Cube-transformed.glb',
        },
    },
    'Connection Subdivision':{
        cube: {
            name: 'Cube',
            type: 'connecting subdivision',
            img: 'cube.jpg',
            path: '/Assets/Cube-transformed.glb',
        },
        oneJoint: {
            name: 'OneJoint',
            type: 'connecting subdivision',
            img: '1joint.jpg',
            path: '/Assets/1_joint-transformed.glb',
        },
    },
    'Terminal Subdivision':{
        hemisphere: {
            name: 'hemisphere',
            type: 'terminal subdivision',
            img: 'hemisphere.jpg',
            path: '/Assets/Hemisphere-transformed.glb',
        },
        sensor: {
            name: 'sensor',
            type: 'terminal subdivision',
            img: 'sensor.jpg',
            path: '/Assets/Sensor-transformed.glb',
        },
    },
};

export default modelRegistry;