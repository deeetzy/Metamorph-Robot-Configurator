// src/utils/loadGLB.js

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const loadGLBGeometry = (path) => {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.load(
      path,
      (gltf) => {
        let vertices = [];
        let faces = [];

        gltf.scene.traverse((child) => {
          if (child.isMesh) {
            const geometry = child.geometry;
            const position = geometry.attributes.position;
            const index = geometry.index;

            // Extract vertices
            for (let i = 0; i < position.count; i++) {
              vertices.push([
                position.getX(i),
                position.getY(i),
                position.getZ(i)
              ]);
            }

            // Extract faces (indices)
            if (index) {
              const idx = index.array;
              for (let i = 0; i < idx.length; i += 3) {
                faces.push([idx[i], idx[i + 1], idx[i + 2]]);
              }
            } else {
              // No index buffer: treat every 3 sequential vertices as a face
              for (let i = 0; i < position.count; i += 3) {
                faces.push([i, i + 1, i + 2]);
              }
            }
          }
        });

        resolve({ vertices, faces });
      },
      undefined,
      (error) => {
        console.error("Error loading GLB:", error);
        reject(error);
      }
    );
  });
};
