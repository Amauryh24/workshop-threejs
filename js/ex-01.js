let camera;
let scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let geometry = new THREE.BoxGeometry();
let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
let cube = new THREE.Mesh(geometry, material);
cube.translateX(4);
scene.add(cube);

let geometry2 = new THREE.SphereGeometry(5, 8, 6);
let material2 = new THREE.MeshNormalMaterial({ wireframe: true });
let sphere = new THREE.Mesh(geometry2, material2);
sphere.rotateX(90);
scene.add(sphere);

camera.position.z = 5;

animation = () => {
  requestAnimationFrame(animation);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;

  sphere.rotation.y += 0.001;

  renderer.render(scene, camera);
};

animation();

// défi
scene.background = new THREE.Color("skyblue");

// défi 2 Responsive
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
