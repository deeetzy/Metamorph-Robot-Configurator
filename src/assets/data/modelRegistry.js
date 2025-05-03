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
            //inconsistent naming
            Cube: {
                name: 'Cube',
                type: 'core subdivision',
                img: 'BoxCube.png',
                path: '/Assets/Cube.glb',
            },
            //inconsistent naming
            RoundedBox: {
                name: 'BoxRounded',
                type: 'core subdivision',
                img: 'BoxRounded.png',
                path: '/Assets/RoundedBox.glb',
            },
            Cog: {
                name: 'Cog',
                type: 'core subdivision',
                img: 'Cog.png',
                path: '/Assets/Cog.glb',
            },
            Cone: {
                name: 'Cone',
                type: 'core subdivision',
                img: 'Cone.png',
                path: '/Assets/Cone.glb',
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
            Triangle: {
                name: 'Triangle',
                type: 'core subdivision',
                img: 'Triangle.png',
                path: '/Assets/Triangle.glb',
            },
            VShape: {
                name: 'V-Shape',
                type: 'core subdivision',
                img: 'VShape.png',
                path: '/Assets/VShape.glb',
            },
        },
    },
    'Connecting Subdivision':{
        'Basic connecting subdivisions':{
            Neck: {
                name: 'Neck',
                type: 'connecting subdivision',
                img: 'Neck.png',
                path: '/Assets/ShortNeck.glb',
            },
            Shoulder: {
                name: 'Shoulder',
                type: 'connecting subdivision',
                img: 'Shoulder.png',
                path: '/Assets/Shoulder.glb',
            },
        },
        'Arm configurations':{
            Arm0: {
                name: '0-Joint Arm',
                type: 'connecting subdivision',
                img: 'Arm0.png',
                path: '/Assets/Arm0.glb',
            },
            Arm1: {
                name: '1-Joint Arm',
                type: 'connecting subdivision',
                img: 'Arm1.png',
                path: '/Assets/Arm1.glb',
            },
            Arm2: {
                name: '2-Joint Arm',
                type: 'connecting subdivision',
                img: 'Arm2.png',
                path: '/Assets/Arm2.glb',
            },
        },
        'Leg configurations':{
            Leg0: {
                name: '0-Joint Leg',
                type: 'connecting subdivision',
                img: 'Leg0.png',
                path: '/Assets/Leg0.glb',
            },
            Leg1: {
                name: '1-Joint Leg',
                type: 'connecting subdivision',
                img: 'Leg1.png',
                path: '/Assets/Leg1.glb',
            },
            Leg2: {
                name: '2-Joint Leg',
                type: 'connecting subdivision',
                img: 'Leg2.png',
                path: '/Assets/Leg2.glb',
            },
        },
    },
    'Terminal Subdivision':{
        'Manipulator':{
            Hand2: {
                name: '2-finger Hand',
                type: 'terminal subdivision',
                img: 'Hand2.png',
                path: '/Assets/Hand2.glb',
            },
            Hand3: {
                name: '3-finger Hand',
                type: 'terminal subdivision',
                img: 'Hand3.png',
                path: '/Assets/Hand3.glb',
            },
            Hand4: {
                name: '4-finger Hand',
                type: 'terminal subdivision',
                img: 'Hand4.png',
                path: '/Assets/Hand4.glb',
            },
            Hand5: {
                name: '5-finger Hand',
                type: 'terminal subdivision',
                img: 'Hand5.png',
                path: '/Assets/Hand5.glb',
            },
        },
        'Higher face feature':{
            CameraEye: {
                name: 'Camera eye',
                type: 'terminal subdivision',
                img: 'CameraEye.png',
                path: '/Assets/CameraEye.glb',
            },
            SensorArray: {
                name: 'Sensor array',
                type: 'terminal subdivision',
                img: 'SensorArray.png',
                path: '/Assets/SensorArray.glb',
            },
            Visor: {
                name: 'Visor',
                type: 'terminal subdivision',
                img: 'Visor.png',
                path: '/Assets/Visor.glb',
            },
            Eyebrow: {
                name: 'Eyebrow',
                type: 'terminal subdivision',
                img: 'Eyebrow.png',
                path: '/Assets/Eyebrow.glb',
            },
        },
        'Ground supporting subdivision': {
            Shoe: {
                name: '2-Shoe',
                type: 'terminal subdivision',
                img: 'Shoe.png',
                path: '/Assets/Shoe.glb',
            },
            TwoToed: {
                name: '2-Toed',
                type: 'terminal subdivision',
                img: '2Toed.png',
                path: '/Assets/2Toed.glb',
            },
            Hoof: {
                name: '2-Hoof',
                type: 'terminal subdivision',
                img: 'Hoof.png',
                path: '/Assets/Hoof.glb',
            },

        },
        'Appendage':{
            Antenna: {
                name: 'Antenna',
                type: 'terminal subdivision',
                img: 'Antenna.png',
                path: '/Assets/Antenna.glb',
            },
            Backpack: {
                name: 'Backpack',
                type: 'terminal subdivision',
                img: 'Backpack.png',
                path: '/Assets/Backpack.glb',
            },
            Container: {
                name: 'Container',
                type: 'terminal subdivision',
                img: 'Container.png',
                path: '/Assets/Container.glb',
            },
            Fin: {
                name: 'Fin',
                type: 'terminal subdivision',
                img: 'Fin.png',
                path: '/Assets/Fin.glb',
            },
            FaceScreen: {
                name: 'FaceScreen',
                type: 'terminal subdivision',
                img: 'FaceScreen.png',
                path: '/Assets/FaceScreen.glb',
            },
            SteeringWheel: {
                name: 'SteeringWheel',
                type: 'terminal subdivision',
                img: 'SteeringWheel.png',
                path: '/Assets/SteeringWheel.glb',
            },
            Tail: {
                name: 'Tail',
                type: 'terminal subdivision',
                img: 'Tail.png',
                path: '/Assets/Tail.glb',
            },
            Thruster: {
                name: 'Thruster',
                type: 'terminal subdivision',
                img: 'Thruster.png',
                path: '/Assets/Thruster.glb',
            },
            Wing: {
                name: 'Wing',
                type: 'terminal subdivision',
                img: 'Wing.png',
                path: '/Assets/Wing.glb',
            },
        },
    },
};

export default modelRegistry;