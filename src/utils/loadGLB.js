import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const loadGLBGeometry = (path) => {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.load(
      path,
      (gltf) => {
        let vertices = [];
        let normals = [];
        let faces = [];

        gltf.scene.traverse((child) => {
          if (child.isMesh) {
            const geometry = child.geometry;
            const position = geometry.attributes.position;
            const normal = geometry.attributes.normal;

            // Extract vertices
            for (let i = 0; i < position.count; i++) {
              vertices.push([
                position.getX(i),
                position.getY(i),
                position.getZ(i),
              ]);
            }

            // Extract normals
            if (normal) {
              for (let i = 0; i < normal.count; i++) {
                normals.push([
                  normal.getX(i),
                  normal.getY(i),
                  normal.getZ(i),
                ]);
              }
            } else {
              // If no normals, fill with dummy normals
              for (let i = 0; i < position.count; i++) {
                normals.push([0, 0, 1]);
              }
            }

            // Extract faces (indices)
            if (geometry.index) {
              const index = geometry.index.array;
              for (let i = 0; i < index.length; i += 3) {
                faces.push([index[i], index[i + 1], index[i + 2]]);
              }
            } else {
              // If no index, build faces sequentially
              for (let i = 0; i < position.count; i += 3) {
                faces.push([i, i + 1, i + 2]);
              }
            }
          }
        });

        resolve({ vertices, normals, faces });
      },
      undefined,
      (error) => reject(error)
    );
  });
};
