// init scene
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById("threejs").appendChild(renderer.domElement);
// background color

scene.background = new THREE.Color("skyblue");
// import objet

let loader = new THREE.GLTFLoader();
loader.load("../assets/p38/scene.gltf", gltf => {
  scene.add(gltf.scene);
  renderer.render(scene, camera);
});

camera.position.z = 10;

// ambient light
hlight = new THREE.AmbientLight(0x8ea2c6, 1);
scene.add(hlight);

// Directional light
directionalLight = new THREE.DirectionalLight(0xffffff, 5);
directionalLight.position.set(0, 1, 0);
scene.add(directionalLight);

// OrbitControl
let controls = new THREE.OrbitControls(camera, renderer.domElement);
camera.position.set(0, 0, 15);

animate = () => {
  requestAnimationFrame(animate);
  controls.autoRotate = true;
  controls.autoRotateSpeed = 2;
  controls.update();
  renderer.render(scene, camera);
};
animate();
