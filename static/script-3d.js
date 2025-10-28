// 3D background script
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(5);

renderer.render( scene, camera );

const particlesGeometry = new THREE.BufferGeometry;
const particlesCnt = 5000;

const posArray = new Float32Array(particlesCnt * 3);

for(let i = 0; i < particlesCnt * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * (Math.random() * 5) * 20
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

const particlesMaterial = new THREE.PointsMaterial({
    size: 0.02,
    color: 0xffffff,
})

const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX
    mouseY = event.clientY
});

const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

function animate() {
  if (!motionQuery.matches) {
    requestAnimationFrame( animate );

    particlesMesh.rotation.y = mouseX * 0.0001;
    particlesMesh.rotation.x = mouseY * 0.0001;
  }
  renderer.render( scene, camera );
}

animate();

window.addEventListener('scroll', () => {
  camera.position.z = 5 + window.scrollY * 0.01;
});
