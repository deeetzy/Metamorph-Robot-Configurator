import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter';

export const exportGLB = (scene, filename = 'scene.glb') => {
  const exporter = new GLTFExporter();

  exporter.parse(
    scene,
    (result) => {
      let output;
      let blob;

      if (result instanceof ArrayBuffer) {
        blob = new Blob([result], { type: 'model/gltf-binary' });
      } else {
        output = JSON.stringify(result, null, 2);
        blob = new Blob([output], { type: 'text/plain' });
      }

      const link = document.createElement('a');
      link.style.display = 'none';
      document.body.appendChild(link);

      link.href = URL.createObjectURL(blob);
      link.download = filename;
      link.click();

      // Clean up
      document.body.removeChild(link);
    },
    { binary: true } // set true for GLB (binary), false for JSON GLTF
  );
};
