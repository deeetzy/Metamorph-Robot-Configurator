import bpy
import sys

# Get command line args after "--"
argv = sys.argv
argv = argv[argv.index("--") + 1:] if "--" in argv else []

input_path = argv[0] if len(argv) > 0 else "robot.glb"
output_path = argv[1] if len(argv) > 1 else "robot_animated.fbx"

# Reset Blender scene to default empty scene
bpy.ops.wm.read_factory_settings(use_empty=True)

# Import the model (support GLB/GLTF and OBJ)
if input_path.lower().endswith((".glb", ".gltf")):
    bpy.ops.import_scene.gltf(filepath=input_path)
elif input_path.lower().endswith(".obj"):
    bpy.ops.import_scene.obj(filepath=input_path)
else:
    raise RuntimeError("Unsupported input file format.")

# Find the first mesh object
robot = next((obj for obj in bpy.data.objects if obj.type == 'MESH'), None)
if robot is None:
    raise RuntimeError("No mesh object found in the imported scene.")

# Make sure robot is active and selected
bpy.context.view_layer.objects.active = robot
robot.select_set(True)

# Clear any existing animation data
robot.animation_data_clear()

# Animate robot location: forward and backward on Y-axis
start_frame = 1
mid_frame = 40
end_frame = 80
distance = 2.0

# Frame 1 - start position
robot.location = (0, 0, 0)
robot.keyframe_insert(data_path="location", frame=start_frame)

# Frame 40 - moved forward
robot.location = (0, distance, 0)
robot.keyframe_insert(data_path="location", frame=mid_frame)

# Frame 80 - back to start
robot.location = (0, 0, 0)
robot.keyframe_insert(data_path="location", frame=end_frame)

# Set the scene frame range for looping animation
bpy.context.scene.frame_start = start_frame
bpy.context.scene.frame_end = end_frame

# Export the animated robot as FBX for Unity
bpy.ops.export_scene.fbx(filepath=output_path, use_selection=False)

print(f"Animated robot exported to {output_path}")
