//for now, duplicated Shapes
//TODO: find solution, so shapes are at the beginning of every accordeon without registry code duplication
const modelRegistry = {
    'Core Subdivision':{
        'Basic Shapes':{
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
            BoxRounded: {
                name: 'Rounded Box',
                type: 'core subdivision',
                img: 'BoxRounded.png',
                path: '/Assets/BoxRounded.glb',
            },
            ConeGeneral: {
                name: 'Cone',
                type: 'core subdivision',
                img: 'ConeGeneral.png',
                path: '/Assets/ConeGeneral.glb',
            },
            ConeRounded: {
                name: 'Rounded Cone',
                type: 'core subdivision',
                img: 'ConeRounded.png',
                path: '/Assets/ConeRounded.glb',
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
        'Letter Shapes':{
            LShaped: {
                name: 'L-Shaped',
                type: 'core subdivision',
                img: 'LShaped.png',
                path: '/Assets/LShaped.glb',
            },
            SShaped: {
                name: 'S-Shaped',
                type: 'core subdivision',
                img: 'SShaped.png',
                path: '/Assets/SShaped.glb',
            },
            TShaped: {
                name: 'T-Shaped',
                type: 'core subdivision',
                img: 'TShaped.png',
                path: '/Assets/TShaped.glb',
            },
            UShaped: {
                name: 'U-Shaped',
                type: 'core subdivision',
                img: 'UShaped.png',
                path: '/Assets/UShaped.glb',
            },
            XShaped: {
                name: 'X-Shaped',
                type: 'core subdivision',
                img: 'XShaped.png',
                path: '/Assets/XShaped.glb',
            },
        },
    },
    'Connecting Subdivision':{
        'Basic connecting subdivisions':{
            Head: {
                name: 'Head',
                type: 'connecting subdivision',
                img: 'Head.png',
                path: '/Assets/Head.glb',
            },
            Helmet: {
                name: 'Helmet',
                type: 'connecting subdivision',
                img: 'Helmet.png',
                path: '/Assets/Helmet.glb',
            },
            Snout: {
                name: 'Snout',
                type: 'connecting subdivision',
                img: 'Snout.png',
                path: '/Assets/Snout.glb',
            },
            NeckShort: {
                name: 'Short Neck',
                type: 'connecting subdivision',
                img: 'NeckShort.png',
                path: '/Assets/NeckShort.glb',
            },
            NeckLong: {
                name: 'Long Neck',
                type: 'connecting subdivision',
                img: 'NeckLong.png',
                path: '/Assets/NeckLong.glb',
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
            Arm3: {
                name: '3-Joint Arm',
                type: 'connecting subdivision',
                img: 'Arm3.png',
                path: '/Assets/Arm3.glb',
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
            Leg3: {
                name: '3-Joint Leg',
                type: 'connecting subdivision',
                img: 'Leg3.png',
                path: '/Assets/Leg3.glb',
            },
        },
    },
    'Terminal Subdivision':{
        'Hair':{
            HairA: {
                name: 'Hair Long',
                type: 'terminal subdivision',
                img: 'HairA.png',
                path: '/Assets/HairA.glb',
            },
            HairB: {
                name: 'Hair Short',
                type: 'terminal subdivision',
                img: 'HairB.png',
                path: '/Assets/HairB.glb',
            },
            Eyebrow: {
                name: 'Eyebrow',
                type: 'terminal subdivision',
                img: 'Eyebrow.png',
                path: '/Assets/Eyebrow.glb',
            },
            Beard: {
                name: 'Beard',
                type: 'terminal subdivision',
                img: 'Beard.png',
                path: '/Assets/Beard.glb',
            },
        },
        'Higher Face Features':{
            Eye: {
                name: 'Eye',
                type: 'terminal subdivision',
                img: 'Eye.png',
                path: '/Assets/Eye.glb',
            },
            CameraEye: {
                name: 'Camera Eye',
                type: 'terminal subdivision',
                img: 'CameraEye.png',
                path: '/Assets/CameraEye.glb',
            },
            SensorArray: {
                name: 'Sensor Array',
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
        },
        'Mid Face Features':{
            Ear1: {
                name: 'Humanoid Ear',
                type: 'terminal subdivision',
                img: 'Ear1.png',
                path: '/Assets/Ear1.glb',
            },
            Nose1: {
                name: 'Humanoid Nose',
                type: 'terminal subdivision',
                img: 'Nose1.png',
                path: '/Assets/Nose1.glb',
            },
            Ear2: {
                name: 'Robotic Ear',
                type: 'terminal subdivision',
                img: 'Ear2.png',
                path: '/Assets/Ear2.glb',
            },
            Nose2: {
                name: 'Robotic Nose',
                type: 'terminal subdivision',
                img: 'Nose2.png',
                path: '/Assets/Nose2.glb',
            },
        },
        'Lower Face Features':{
            Mouth: {
                name: 'Mouth',
                type: 'terminal subdivision',
                img: 'Mouth.png',
                path: '/Assets/Mouth.glb',
            },
            Beak: {
                name: 'Beak',
                type: 'terminal subdivision',
                img: 'Beak.png',
                path: '/Assets/Beak.glb',
            },
        },
        'Hand Configurations':{
            Hand2: {
                name: '2-Finger Hand',
                type: 'terminal subdivision',
                img: 'Hand2.png',
                path: '/Assets/Hand2.glb',
            },
            Hand3: {
                name: '3-Finger Hand',
                type: 'terminal subdivision',
                img: 'Hand3.png',
                path: '/Assets/Hand3.glb',
            },
            Hand4: {
                name: '4-Finger Hand',
                type: 'terminal subdivision',
                img: 'Hand4.png',
                path: '/Assets/Hand4.glb',
            },
            Hand5: {
                name: '5-Finger Hand',
                type: 'terminal subdivision',
                img: 'Hand5.png',
                path: '/Assets/Hand5.glb',
            },
            Mitten: {
                name: 'Mitten Hand',
                type: 'terminal subdivision',
                img: 'Mitten.png',
                path: '/Assets/Mitten.glb',
            },

        },
        'Gripper Configurations':{
            Gripper2: {
                name: '2-Finger Gripper',
                type: 'terminal subdivision',
                img: 'Gripper2.png',
                path: '/Assets/Gripper2.glb',
            },
            Gripper3: {
                name: '3-Finger Gripper',
                type: 'terminal subdivision',
                img: 'Gripper3.png',
                path: '/Assets/Gripper3.glb',
            },
            Gripper4: {
                name: '4-Finger Gripper',
                type: 'terminal subdivision',
                img: 'Gripper4.png',
                path: '/Assets/Gripper4.glb',
            },
            Gripper5: {
                name: '5-Finger Gripper',
                type: 'terminal subdivision',
                img: 'Gripper5.png',
                path: '/Assets/Gripper5.glb',
            },
        },
        'Other Manipulators':{
            Knob: {
                name: 'Knob',
                type: 'terminal subdivision',
                img: 'Knob.png',
                path: '/Assets/Knob.glb',
            },
            SuctionCup: {
                name: 'Suction Cups',
                type: 'terminal subdivision',
                img: 'SuctionCup.png',
                path: '/Assets/SuctionCup.glb',
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
            CableBundle: {
                name: 'CableBundle',
                type: 'terminal subdivision',
                img: 'CableBundle.png',
                path: '/Assets/CableBundle.glb',
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
            Frame: {
                name: 'Frame',
                type: 'terminal subdivision',
                img: 'Frame.png',
                path: '/Assets/Frame.glb',
            },
            Handle: {
                name: 'Handle',
                type: 'terminal subdivision',
                img: 'Handle.png',
                path: '/Assets/Handle.glb',
            },
            FaceScreen: {
                name: 'Screen',
                type: 'terminal subdivision',
                img: 'FaceScreen.png',
                path: '/Assets/FaceScreen.glb',
            },
            Lamp: {
                name: 'Lamp',
                type: 'terminal subdivision',
                img: 'Lamp.png',
                path: '/Assets/Lamp.glb',
            },
            SteeringWheel: {
                name: 'Steering Wheel',
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

        },
        'Ground Supporting Subdivision':{
            Shoe: {
                name: 'Shoe',
                type: 'terminal subdivision',
                img: 'Shoe.png',
                path: '/Assets/Shoe.glb',
            },
            TwoToed: {
                name: '2-Toed Foot',
                type: 'terminal subdivision',
                img: '2Toed.png',
                path: '/Assets/2Toed.glb',
            },
            ThreeClawed: {
                name: '3-Clawed Paw',
                type: 'terminal subdivision',
                img: '3Clawed.png',
                path: '/Assets/3Clawed.glb',
            },
            Hoof: {
                name: 'Robotic Hoof',
                type: 'terminal subdivision',
                img: 'Hoof.png',
                path: '/Assets/Hoof.glb',
            },
            Wheel: {
                name: 'Wheel',
                type: 'terminal subdivision',
                img: 'Wheel.png',
                path: '/Assets/Wheel.glb',
            },
            Tread: {
                name: 'Tread',
                type: 'terminal subdivision',
                img: 'Tread.png',
                path: '/Assets/Tread.glb',
            },
            Stand: {
                name: 'Stand',
                type: 'terminal subdivision',
                img: 'Stand.png',
                path: '/Assets/Stand.glb',
            },
        },
        'Air Supporting Subdivision':{
            AirRotor: {
                name: 'Air Rotor',
                type: 'terminal subdivision',
                img: 'AirRotor.png',
                path: '/Assets/AirRotor.glb',
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
        'Water Supporting Subdivision':{
            WaterRotor: {
                name: 'Water Rotor',
                type: 'terminal subdivision',
                img: 'WaterRotor.png',
                path: '/Assets/WaterRotor.glb',
            },
            Rudder: {
                name: 'Rudder',
                type: 'terminal subdivision',
                img: 'Rudder.png',
                path: '/Assets/Rudder.glb',
            },
        },
        'Rope Supporting Subdivision':{
            Hanger: {
                name: 'Hanger',
                type: 'terminal subdivision',
                img: 'Hanger.png',
                path: '/Assets/Hanger.glb',
            },
            PulleyWheel: {
                name: 'Pulley Wheel',
                type: 'terminal subdivision',
                img: 'PulleyWheel.png',
                path: '/Assets/PulleyWheel.glb',
            },
            Rope: {
                name: 'Rope',
                type: 'terminal subdivision',
                img: 'Rope.png',
                path: '/Assets/Rope.glb',
            },
        },
    },
};

export default modelRegistry;