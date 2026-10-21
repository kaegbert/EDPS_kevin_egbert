import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { STLLoader } from "three/addons/loaders/STLLoader.js";

const container = document.getElementById("stl-viewer");
const statusEl = document.getElementById("stl-viewer-status");

if (container) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf7f7f7);

  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 2000);
  camera.position.set(55, 40, 70);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.target.set(0, 0, 0);

  scene.add(new THREE.AmbientLight(0xffffff, 0.65));

  const keyLight = new THREE.DirectionalLight(0xffffff, 0.9);
  keyLight.position.set(40, 60, 30);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0xffffff, 0.35);
  fillLight.position.set(-30, 20, -40);
  scene.add(fillLight);

  function setStatus(message) {
    if (statusEl) {
      statusEl.textContent = message;
      statusEl.hidden = !message;
    }
  }

  function resize() {
    const width = container.clientWidth;
    const height = container.clientHeight;
    if (width === 0 || height === 0) {
      return;
    }
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  }

  function fitCameraToObject(object) {
    const box = new THREE.Box3().setFromObject(object);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const distance = maxDim * 2.2;

    controls.target.copy(center);
    camera.position.set(
      center.x + distance * 0.75,
      center.y + distance * 0.55,
      center.z + distance * 0.9
    );
    camera.near = Math.max(distance / 100, 0.1);
    camera.far = distance * 20;
    camera.updateProjectionMatrix();
    controls.update();
  }

  setStatus("Loading 3D model…");
  resize();

  const loader = new STLLoader();
  loader.load(
    "assets/TrackLightingClip_v2_mm.stl",
    (geometry) => {
      geometry.computeVertexNormals();
      geometry.center();

      const material = new THREE.MeshStandardMaterial({
        color: 0xb8b8b8,
        metalness: 0.15,
        roughness: 0.55,
      });
      const mesh = new THREE.Mesh(geometry, material);
      // FreeCAD / STL often exports Z-up; tip the part for a clearer web view
      mesh.rotation.x = -Math.PI / 2;
      scene.add(mesh);

      fitCameraToObject(mesh);
      setStatus("");
    },
    undefined,
    () => {
      setStatus("Could not load the STL model.");
    }
  );

  window.addEventListener("resize", resize);

  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }

  animate();
}
