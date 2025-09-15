//for now, duplicated Shapes
//TODO: find solution, so shapes are at the beginning of every accordeon without registry code duplication
const modelRegistry = {
    'Core Subdivision':{
        'Basic Shapes':{
            Barrel: {
                name: 'Barrel',
                type: 'core subdivision',
                img: 'Barrel.png',
                path: 'Barrel.glb',
            },
            //inconsistent naming
            Cube: {
                name: 'Cube',
                type: 'core subdivision',
                img: 'BoxCube.png',
                path: 'Cube.glb',
            },
            //inconsistent naming
            BoxRounded: {
                name: 'Rounded Box',
                type: 'core subdivision',
                img: 'BoxRounded.png',
                path: 'BoxRounded.glb',
            },
            ConeGeneral: {
                name: 'Cone',
                type: 'core subdivision',
                img: 'ConeGeneral.png',
                path: 'ConeGeneral.glb',
            },
            ConeRounded: {
                name: 'Rounded Cone',
                type: 'core subdivision',
                img: 'ConeRounded.png',
                path: 'ConeRounded.glb',
            },
            Cog: {
                name: 'Cog',
                type: 'core subdivision',
                img: 'Cog.png',
                path: 'Cog.glb',
            },
            Cylinder: {
                name: 'Cylinder',
                type: 'core subdivision',
                img: 'Cylinder.png',
                path: 'Cylinder.glb',
            },
            Diamond: {
                name: 'Diamond',
                type: 'core subdivision',
                img: 'Diamond.png',
                path: 'Diamond.glb',
            },
            Ellipsoid: {
                name: 'Ellipsoid',
                type: 'core subdivision',
                img: 'Ellipsoid.png',
                path: 'Ellipsoid.glb',
            },
            Fork: {
                name: 'Fork',
                type: 'core subdivision',
                img: 'Fork.png',
                path: 'Fork.glb',
            },
            Gravestone: {
                name: 'Gravestone',
                type: 'core subdivision',
                img: 'Gravestone.png',
                path: 'Gravestone.glb',
            },
            Peanut: {
                name: 'Peanut',
                type: 'core subdivision',
                img: 'Peanut.png',
                path: 'Peanut.glb',
            },
            Pear: {
                name: 'Pear',
                type: 'core subdivision',
                img: 'Pear.png',
                path: 'Pear.glb',
            },
            Plate: {
                name: 'Plate',
                type: 'core subdivision',
                img: 'Plate.png',
                path: 'Plate.glb',
            },
            Ring: {
                name: 'Ring',
                type: 'core subdivision',
                img: 'Ring.png',
                path: 'Ring.glb',
            },
            Spade: {
                name: 'Spade',
                type: 'core subdivision',
                img: 'Spade.png',
                path: 'Spade.glb',
            },
            Sphere: {
                name: 'Sphere',
                type: 'core subdivision',
                img: 'Sphere.png',
                path: 'Sphere.glb',
            },
            Trapezoid: {
                name: 'Trapezoid',
                type: 'core subdivision',
                img: 'Trapezoid.png',
                path: 'Trapezoid.glb',
            },
            Triangle: {
                name: 'Triangle',
                type: 'core subdivision',
                img: 'Triangle.png',
                path: 'Triangle.glb',
            },
            Triangle: {
                name: 'Triangle',
                type: 'core subdivision',
                img: 'Triangle.png',
                path: 'Triangle.glb',
            },
            VShape: {
                name: 'V-Shape',
                type: 'core subdivision',
                img: 'VShape.png',
                path: 'VShape.glb',
            },
        },
        'Letter Shapes':{
            LShaped: {
                name: 'L-Shaped',
                type: 'core subdivision',
                img: 'LShaped.png',
                path: 'LShaped.glb',
            },
            SShaped: {
                name: 'S-Shaped',
                type: 'core subdivision',
                img: 'SShaped.png',
                path: 'SShaped.glb',
            },
            TShaped: {
                name: 'T-Shaped',
                type: 'core subdivision',
                img: 'TShaped.png',
                path: 'TShaped.glb',
            },
            UShaped: {
                name: 'U-Shaped',
                type: 'core subdivision',
                img: 'UShaped.png',
                path: 'UShaped.glb',
            },
            XShaped: {
                name: 'X-Shaped',
                type: 'core subdivision',
                img: 'XShaped.png',
                path: 'XShaped.glb',
            },
        },
    },
    'Connecting Subdivision':{
        'Basic connecting subdivisions':{
            Head: {
                name: 'Head',
                type: 'connecting subdivision',
                img: 'Head.png',
                path: 'Head.glb',
            },
            Helmet: {
                name: 'Helmet',
                type: 'connecting subdivision',
                img: 'Helmet.png',
                path: 'Helmet.glb',
            },
            Snout: {
                name: 'Snout',
                type: 'connecting subdivision',
                img: 'Snout.png',
                path: 'Snout.glb',
            },
            NeckShort: {
                name: 'Short Neck',
                type: 'connecting subdivision',
                img: 'NeckShort.png',
                path: 'NeckShort.glb',
            },
            NeckLong: {
                name: 'Long Neck',
                type: 'connecting subdivision',
                img: 'NeckLong.png',
                path: 'NeckLong.glb',
            },
            Shoulder: {
                name: 'Shoulder',
                type: 'connecting subdivision',
                img: 'Shoulder.png',
                path: 'Shoulder.glb',
            },
        },
        'Arm configurations':{
            Arm0: {
                name: '0-Joint Arm',
                type: 'connecting subdivision',
                img: 'Arm0.png',
                path: 'Arm0.glb',
            },
            Arm1: {
                name: '1-Joint Arm',
                type: 'connecting subdivision',
                img: 'Arm1.png',
                path: 'Arm1.glb',
            },
            Arm2: {
                name: '2-Joint Arm',
                type: 'connecting subdivision',
                img: 'Arm2.png',
                path: 'Arm2.glb',
            },
            Arm3: {
                name: '3-Joint Arm',
                type: 'connecting subdivision',
                img: 'Arm3.png',
                path: 'Arm3.glb',
            },
        },
        'Leg configurations':{
            Leg0: {
                name: '0-Joint Leg',
                type: 'connecting subdivision',
                img: 'Leg0.png',
                path: 'Leg0.glb',
            },
            Leg1: {
                name: '1-Joint Leg',
                type: 'connecting subdivision',
                img: 'Leg1.png',
                path: 'Leg1.glb',
            },
            Leg2: {
                name: '2-Joint Leg',
                type: 'connecting subdivision',
                img: 'Leg2.png',
                path: 'Leg2.glb',
            },
            Leg3: {
                name: '3-Joint Leg',
                type: 'connecting subdivision',
                img: 'Leg3.png',
                path: 'Leg3.glb',
            },
        },
    },
    'Terminal Subdivision':{
        'Hair':{
            HairA: {
                name: 'Hair Long',
                type: 'terminal subdivision',
                img: 'HairA.png',
                path: 'HairA.glb',
            },
            HairB: {
                name: 'Hair Short',
                type: 'terminal subdivision',
                img: 'HairB.png',
                path: 'HairB.glb',
            },
            Eyebrow: {
                name: 'Eyebrow',
                type: 'terminal subdivision',
                img: 'Eyebrow.png',
                path: 'Eyebrow.glb',
            },
            Beard: {
                name: 'Beard',
                type: 'terminal subdivision',
                img: 'Beard.png',
                path: 'Beard.glb',
            },
        },
        'Higher Face Features':{
            Eye: {
                name: 'Eye',
                type: 'terminal subdivision',
                img: 'Eye.png',
                path: 'Eye.glb',
            },
            CameraEye: {
                name: 'Camera Eye',
                type: 'terminal subdivision',
                img: 'CameraEye.png',
                path: 'CameraEye.glb',
            },
            SensorArray: {
                name: 'Sensor Array',
                type: 'terminal subdivision',
                img: 'SensorArray.png',
                path: 'SensorArray.glb',
            },
            Visor: {
                name: 'Visor',
                type: 'terminal subdivision',
                img: 'Visor.png',
                path: 'Visor.glb',
            },
        },
        'Mid Face Features':{
            Ear1: {
                name: 'Humanoid Ear',
                type: 'terminal subdivision',
                img: 'Ear1.png',
                path: 'Ear1.glb',
            },
            Nose1: {
                name: 'Humanoid Nose',
                type: 'terminal subdivision',
                img: 'Nose1.png',
                path: 'Nose1.glb',
            },
            Ear2: {
                name: 'Robotic Ear',
                type: 'terminal subdivision',
                img: 'Ear2.png',
                path: 'Ear2.glb',
            },
            Nose2: {
                name: 'Robotic Nose',
                type: 'terminal subdivision',
                img: 'Nose2.png',
                path: 'Nose2.glb',
            },
        },
        'Lower Face Features':{
            Mouth: {
                name: 'Mouth',
                type: 'terminal subdivision',
                img: 'Mouth.png',
                path: 'Mouth.glb',
            },
            Beak: {
                name: 'Beak',
                type: 'terminal subdivision',
                img: 'Beak.png',
                path: 'Beak.glb',
            },
        },
        'Hand Configurations':{
            Hand2: {
                name: '2-Finger Hand',
                type: 'terminal subdivision',
                img: 'Hand2.png',
                path: 'Hand2.glb',
            },
            Hand3: {
                name: '3-Finger Hand',
                type: 'terminal subdivision',
                img: 'Hand3.png',
                path: 'Hand3.glb',
            },
            Hand4: {
                name: '4-Finger Hand',
                type: 'terminal subdivision',
                img: 'Hand4.png',
                path: 'Hand4.glb',
            },
            Hand5: {
                name: '5-Finger Hand',
                type: 'terminal subdivision',
                img: 'Hand5.png',
                path: 'Hand5.glb',
            },
            Mitten: {
                name: 'Mitten Hand',
                type: 'terminal subdivision',
                img: 'Mitten.png',
                path: 'Mitten.glb',
            },

        },
        'Gripper Configurations':{
            Gripper2: {
                name: '2-Finger Gripper',
                type: 'terminal subdivision',
                img: 'Gripper2.png',
                path: 'Gripper2.glb',
            },
            Gripper3: {
                name: '3-Finger Gripper',
                type: 'terminal subdivision',
                img: 'Gripper3.png',
                path: 'Gripper3.glb',
            },
            Gripper4: {
                name: '4-Finger Gripper',
                type: 'terminal subdivision',
                img: 'Gripper4.png',
                path: 'Gripper4.glb',
            },
            Gripper5: {
                name: '5-Finger Gripper',
                type: 'terminal subdivision',
                img: 'Gripper5.png',
                path: 'Gripper5.glb',
            },
        },
        'Other Manipulators':{
            Knob: {
                name: 'Knob',
                type: 'terminal subdivision',
                img: 'Knob.png',
                path: 'Knob.glb',
            },
            SuctionCup: {
                name: 'Suction Cups',
                type: 'terminal subdivision',
                img: 'SuctionCup.png',
                path: 'SuctionCup.glb',
            },
        },
        'Appendage':{
            Antenna: {
                name: 'Antenna',
                type: 'terminal subdivision',
                img: 'Antenna.png',
                path: 'Antenna.glb',
            },
            Backpack: {
                name: 'Backpack',
                type: 'terminal subdivision',
                img: 'Backpack.png',
                path: 'Backpack.glb',
            },
            CableBundle: {
                name: 'CableBundle',
                type: 'terminal subdivision',
                img: 'CableBundle.png',
                path: 'CableBundle.glb',
            },
            Container: {
                name: 'Container',
                type: 'terminal subdivision',
                img: 'Container.png',
                path: 'Container.glb',
            },
            Fin: {
                name: 'Fin',
                type: 'terminal subdivision',
                img: 'Fin.png',
                path: 'Fin.glb',
            },
            Frame: {
                name: 'Frame',
                type: 'terminal subdivision',
                img: 'Frame.png',
                path: 'Frame.glb',
            },
            Handle: {
                name: 'Handle',
                type: 'terminal subdivision',
                img: 'Handle.png',
                path: 'Handle.glb',
            },
            FaceScreen: {
                name: 'Screen',
                type: 'terminal subdivision',
                img: 'FaceScreen.png',
                path: 'FaceScreen.glb',
            },
            Lamp: {
                name: 'Lamp',
                type: 'terminal subdivision',
                img: 'Lamp.png',
                path: 'Lamp.glb',
            },
            SteeringWheel: {
                name: 'Steering Wheel',
                type: 'terminal subdivision',
                img: 'SteeringWheel.png',
                path: 'SteeringWheel.glb',
            },
            Tail: {
                name: 'Tail',
                type: 'terminal subdivision',
                img: 'Tail.png',
                path: 'Tail.glb',
            },

        },
        'Ground Supporting Subdivision':{
            Shoe: {
                name: 'Shoe',
                type: 'terminal subdivision',
                img: 'Shoe.png',
                path: 'Shoe.glb',
            },
            TwoToed: {
                name: '2-Toed Foot',
                type: 'terminal subdivision',
                img: '2Toed.png',
                path: '2Toed.glb',
            },
            ThreeClawed: {
                name: '3-Clawed Paw',
                type: 'terminal subdivision',
                img: '3Clawed.png',
                path: '3Clawed.glb',
            },
            Hoof: {
                name: 'Robotic Hoof',
                type: 'terminal subdivision',
                img: 'Hoof.png',
                path: 'Hoof.glb',
            },
            Wheel: {
                name: 'Wheel',
                type: 'terminal subdivision',
                img: 'Wheel.png',
                path: 'Wheel.glb',
            },
            Tread: {
                name: 'Tread',
                type: 'terminal subdivision',
                img: 'Tread.png',
                path: 'Tread.glb',
            },
            Stand: {
                name: 'Stand',
                type: 'terminal subdivision',
                img: 'Stand.png',
                path: 'Stand.glb',
            },
        },
        'Air Supporting Subdivision':{
            AirRotor: {
                name: 'Air Rotor',
                type: 'terminal subdivision',
                img: 'AirRotor.png',
                path: 'AirRotor.glb',
            },
            Thruster: {
                name: 'Thruster',
                type: 'terminal subdivision',
                img: 'Thruster.png',
                path: 'Thruster.glb',
            },
            Wing: {
                name: 'Wing',
                type: 'terminal subdivision',
                img: 'Wing.png',
                path: 'Wing.glb',
            },
        },
        'Water Supporting Subdivision':{
            WaterRotor: {
                name: 'Water Rotor',
                type: 'terminal subdivision',
                img: 'WaterRotor.png',
                path: 'WaterRotor.glb',
            },
            Rudder: {
                name: 'Rudder',
                type: 'terminal subdivision',
                img: 'Rudder.png',
                path: 'Rudder.glb',
            },
        },
        'Rope Supporting Subdivision':{
            Hanger: {
                name: 'Hanger',
                type: 'terminal subdivision',
                img: 'Hanger.png',
                path: 'Hanger.glb',
            },
            PulleyWheel: {
                name: 'Pulley Wheel',
                type: 'terminal subdivision',
                img: 'PulleyWheel.png',
                path: 'PulleyWheel.glb',
            },
            Rope: {
                name: 'Rope',
                type: 'terminal subdivision',
                img: 'Rope.png',
                path: 'Rope.glb',
            },
        },
    },
};

export default modelRegistry;