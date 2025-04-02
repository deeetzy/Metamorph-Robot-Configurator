//for now, duplicated Shapes
//TODO: find solution, so shapes are at the beginning of every accordeon without registry code duplication
const modelRegistry = {
    'Core Subdivision':{
        'General descriptor - Shapes':{
            Barrel: {
                name: 'Barrel',
                type: 'core subdivision',
                img: 'Barrel.png',
                path: '/Assets/Barrel.glb',
            },
            Cube: {
                name: 'Cube',
                type: 'core subdivision',
                img: 'BoxCube.png',
                path: '/Assets/BoxCube.glb',
            },
            RoundedBox: {
                name: 'BoxRounded',
                type: 'core subdivision',
                img: 'BoxRounded.png',
                path: '/Assets/BoxRounded.glb',
            },
            Cog: {
                name: 'Cog',
                type: 'core subdivision',
                img: 'Cog.png',
                path: '/Assets/Cog.glb',
            },
            Cylinder: {
                name: 'Cylinder',
                type: 'core subdivision',
                img: 'Cylinder.png',
                path: '/Assets/Cylinder.glb',
            },
            Diamond: {
                name: 'Diamond',
                type: 'core subdivision',
                img: 'Diamond.png',
                path: '/Assets/Diamond.glb',
            },
            Ellipsoid: {
                name: 'Ellipsoid',
                type: 'core subdivision',
                img: 'Ellipsoid.png',
                path: '/Assets/Ellipsoid.glb',
            },
            Fork: {
                name: 'Fork',
                type: 'core subdivision',
                img: 'Fork.png',
                path: '/Assets/Fork.glb',
            },
            Gravestone: {
                name: 'Gravestone',
                type: 'core subdivision',
                img: 'Gravestone.png',
                path: '/Assets/Gravestone.glb',
            },
            Peanut: {
                name: 'Peanut',
                type: 'core subdivision',
                img: 'Peanut.png',
                path: '/Assets/Peanut.glb',
            },
            Pear: {
                name: 'Pear',
                type: 'core subdivision',
                img: 'Pear.png',
                path: '/Assets/Pear.glb',
            },
            Plate: {
                name: 'Plate',
                type: 'core subdivision',
                img: 'Plate.png',
                path: '/Assets/Plate.glb',
            },
            Ring: {
                name: 'Ring',
                type: 'core subdivision',
                img: 'Ring.png',
                path: '/Assets/Ring.glb',
            },
            Spade: {
                name: 'Spade',
                type: 'core subdivision',
                img: 'Spade.png',
                path: '/Assets/Spade.glb',
            },
            Sphere: {
                name: 'Sphere',
                type: 'core subdivision',
                img: 'Sphere.png',
                path: '/Assets/Sphere.glb',
            },
            Trapezoid: {
                name: 'Trapezoid',
                type: 'core subdivision',
                img: 'Trapezoid.png',
                path: '/Assets/Trapezoid.glb',
            },
            Triangle: {
                name: 'Triangle',
                type: 'core subdivision',
                img: 'Triangle.png',
                path: '/Assets/Triangle.glb',
            },
        },
    },
    'Connection Subdivision':{
        'General descriptor - Shapes':{
            Barrel: {
                name: 'Barrel',
                type: 'connecting subdivision',
                img: 'Barrel.png',
                path: '/Assets/Barrel.glb',
            },
            Cube: {
                name: 'Cube',
                type: 'connecting subdivision',
                img: 'BoxCube.png',
                path: '/Assets/BoxCube.glb',
            },
            RoundedBox: {
                name: 'BoxRounded',
                type: 'connecting subdivision',
                img: 'BoxRounded.png',
                path: '/Assets/BoxRounded.glb',
            },
            Cog: {
                name: 'Cog',
                type: 'connecting subdivision',
                img: 'Cog.png',
                path: '/Assets/Cog.glb',
            },
            Cylinder: {
                name: 'Cylinder',
                type: 'connecting subdivision',
                img: 'Cylinder.png',
                path: '/Assets/Cylinder.glb',
            },
            Diamond: {
                name: 'Diamond',
                type: 'connecting subdivision',
                img: 'Diamond.png',
                path: '/Assets/Diamond.glb',
            },
            Ellipsoid: {
                name: 'Ellipsoid',
                type: 'connecting subdivision',
                img: 'Ellipsoid.png',
                path: '/Assets/Ellipsoid.glb',
            },
            Fork: {
                name: 'Fork',
                type: 'connecting subdivision',
                img: 'Fork.png',
                path: '/Assets/Fork.glb',
            },
            Gravestone: {
                name: 'Gravestone',
                type: 'connecting subdivision',
                img: 'Gravestone.png',
                path: '/Assets/Gravestone.glb',
            },
            Peanut: {
                name: 'Peanut',
                type: 'connecting subdivision',
                img: 'Peanut.png',
                path: '/Assets/Peanut.glb',
            },
            Pear: {
                name: 'Pear',
                type: 'connecting subdivision',
                img: 'Pear.png',
                path: '/Assets/Pear.glb',
            },
            Plate: {
                name: 'Plate',
                type: 'connecting subdivision',
                img: 'Plate.png',
                path: '/Assets/Plate.glb',
            },
            Ring: {
                name: 'Ring',
                type: 'connecting subdivision',
                img: 'Ring.png',
                path: '/Assets/Ring.glb',
            },
            Spade: {
                name: 'Spade',
                type: 'connecting subdivision',
                img: 'Spade.png',
                path: '/Assets/Spade.glb',
            },
            Sphere: {
                name: 'Sphere',
                type: 'connecting subdivision',
                img: 'Sphere.png',
                path: '/Assets/Sphere.glb',
            },
            Trapezoid: {
                name: 'Trapezoid',
                type: 'connecting subdivision',
                img: 'Trapezoid.png',
                path: '/Assets/Trapezoid.glb',
            },
            Triangle: {
                name: 'Triangle',
                type: 'connecting subdivision',
                img: 'Triangle.png',
                path: '/Assets/Triangle.glb',
            },
        },
        'Subdivision-specific descriptor':{
            oneJoint: {
                name: 'OneJoint',
                type: 'connecting subdivision',
                img: '1joint.jpg',
                path: '/Assets/1_joint-transformed.glb',
            },
        },
    },
    'Terminal Subdivision':{
        'General descriptor - Shapes':{
            Barrel: {
                name: 'Barrel',
                type: 'terminal subdivision',
                img: 'Barrel.png',
                path: '/Assets/Barrel.glb',
            },
            Cube: {
                name: 'Cube',
                type: 'terminal subdivision',
                img: 'BoxCube.png',
                path: '/Assets/BoxCube.glb',
            },
            RoundedBox: {
                name: 'BoxRounded',
                type: 'terminal subdivision',
                img: 'BoxRounded.png',
                path: '/Assets/BoxRounded.glb',
            },
            Cog: {
                name: 'Cog',
                type: 'terminal subdivision',
                img: 'Cog.png',
                path: '/Assets/Cog.glb',
            },
            Cylinder: {
                name: 'Cylinder',
                type: 'terminal subdivision',
                img: 'Cylinder.png',
                path: '/Assets/Cylinder.glb',
            },
            Diamond: {
                name: 'Diamond',
                type: 'terminal subdivision',
                img: 'Diamond.png',
                path: '/Assets/Diamond.glb',
            },
            Ellipsoid: {
                name: 'Ellipsoid',
                type: 'terminal subdivision',
                img: 'Ellipsoid.png',
                path: '/Assets/Ellipsoid.glb',
            },
            Fork: {
                name: 'Fork',
                type: 'terminal subdivision',
                img: 'Fork.png',
                path: '/Assets/Fork.glb',
            },
            Gravestone: {
                name: 'Gravestone',
                type: 'terminal subdivision',
                img: 'Gravestone.png',
                path: '/Assets/Gravestone.glb',
            },
            Peanut: {
                name: 'Peanut',
                type: 'terminal subdivision',
                img: 'Peanut.png',
                path: '/Assets/Peanut.glb',
            },
            Pear: {
                name: 'Pear',
                type: 'terminal subdivision',
                img: 'Pear.png',
                path: '/Assets/Pear.glb',
            },
            Plate: {
                name: 'Plate',
                type: 'terminal subdivision',
                img: 'Plate.png',
                path: '/Assets/Plate.glb',
            },
            Ring: {
                name: 'Ring',
                type: 'terminal subdivision',
                img: 'Ring.png',
                path: '/Assets/Ring.glb',
            },
            Spade: {
                name: 'Spade',
                type: 'terminal subdivision',
                img: 'Spade.png',
                path: '/Assets/Spade.glb',
            },
            Sphere: {
                name: 'Sphere',
                type: 'terminal subdivision',
                img: 'Sphere.png',
                path: '/Assets/Sphere.glb',
            },
            Trapezoid: {
                name: 'Trapezoid',
                type: 'terminal subdivision',
                img: 'Trapezoid.png',
                path: '/Assets/Trapezoid.glb',
            },
            Triangle: {
                name: 'Triangle',
                type: 'terminal subdivision',
                img: 'Triangle.png',
                path: '/Assets/Triangle.glb',
            },
        },
        'Ground supporting supdivision':{
            hemisphere: {
                name: 'hemisphere',
                type: 'terminal subdivision',
                img: 'hemisphere.jpg',
                path: '/Assets/Hemisphere-transformed.glb',
            },
        },
        'Head segment':{
            sensor: {
                name: 'sensor',
                type: 'terminal subdivision',
                img: 'sensor.jpg',
                path: '/Assets/Sensor-transformed.glb',
            },
        },
    },
};

export default modelRegistry;