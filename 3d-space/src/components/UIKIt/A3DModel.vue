<template>
  <canvas class="model" ref="canvasRef"></canvas>
</template>

<script setup>
  import * as THREE from "three";
  import { onMounted, onUnmounted, ref, render } from "vue";

  let scene = new THREE.Scene();
  let renderer;
  let canvasRef = ref();

  let boxGeometry = new THREE.BoxGeometry(1, 1, 1);
  let boxMaterial = new THREE.MeshStandardMaterial({ color: "mediumpurple" });
  let box = new THREE.Mesh(boxGeometry, boxMaterial);
  box.position.set(0, 0, -2);

  scene.add(box);

  let ambientLight = new  THREE.AmbientLight("#FFFFFF", 1);
  scene.add(ambientLight);

  let camera = new THREE.PerspectiveCamera(
    75,
    600 / 600,
    0.1,
    100
  );
  camera.position.y=1;
  camera.position.z=2;
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  scene.add(camera);

  // let loop = () => {
  //   box.rotation.y += 0.02;
  //   renderer.render(scene, camera);
  //   requestAnimationFrame(loop);
  // };

  let loop = () => {
    box.rotation.y += 0.02;
    renderer.render(scene, camera);
  };

  // let resizeCallback = () => {
  //   renderer.setSeze()
  // }

  onMounted(() =>{
    renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.value,
      antialias: true,
      alpha: true,
    });

    renderer.setSize(640, 640);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.render(scene, camera);
    
    // requestAnimationFrame(loop);
    renderer.setAnimationLoop(loop);
  })

  onUnmounted(() => {
    renderer.setAnimationLoop(null);
  })
// export default {
//   props: {
//   },
//   data() {
//     return {

//     }
//   },
//   methods: {

//   }
// };
</script>

<style scoped>
.model {
}
</style>
