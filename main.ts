import * as THREE from "three";

import { Renderer } from "./rendering/Renderer";
import { Camera } from "./rendering/Camera";
import { Player } from "./objects/Player";
import { DirectionalLight } from "./rendering/DirectionalLight";
import createMap from "./objects/environment";
import { animateVehicles } from "./animation/VehicleAnimation";
import { animatePlayer } from "./animation/PlayerAnimation";
import { detectCollisions } from "./animation/CollisionDetection";

const scene: THREE.Scene = new THREE.Scene();
const camera = new Camera();
camera.setPosition(300, -300, 300);
camera.lookAt(0, 0, 0);
scene.add(camera.getCamera());

const renderer = new Renderer();

const player = new Player();
player.cameraContainer.add(camera.getCamera());

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      event.preventDefault();
      player.enqueueMove("forward");
      break;
    case "ArrowLeft":
      event.preventDefault();
      player.enqueueMove("left");
      break;
    case "ArrowRight":
      event.preventDefault();
      player.enqueueMove("right");
      break;
    case "ArrowDown":
      event.preventDefault();
      player.enqueueMove("backward");
      break;
    default:
      console.log(`Sorry, not a valid key.`);
  }
});

const ambientLight = new THREE.AmbientLight();

const dirLight = new DirectionalLight();
dirLight.getLight().target = player.cameraContainer;
player.cameraContainer.add(dirLight.getLight());

const map = createMap();

scene.add(ambientLight);
scene.add(player.cameraContainer);
scene.add(map);

renderer.render(scene, camera.getCamera());
renderer.setAnimationLoop(animate);

function animate() {
  animateVehicles();
  animatePlayer(player);
  detectCollisions(player);
  renderer.render(scene, camera.getCamera());
}
