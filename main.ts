import * as THREE from "three";

import { Renderer } from "./Renderer";
import { Camera } from "./Camera";
import { Player } from "./Player";
import { DirectionalLight } from "./DirectionalLight";
import { createMap } from "./Map";
import { animateVehicles } from "./VehicleAnimation";
import { animatePlayer } from "./PlayerAnimation";

const scene: THREE.Scene = new THREE.Scene();
const camera = new Camera();
camera.setPosition(300, -300, 300);
camera.lookAt(0, 0, 0);
scene.add(camera.getCamera());

const renderer = new Renderer();

const player = new Player();
// player.getMesh().add(camera.getCamera());
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
dirLight.setPosition(-100, -100, 200);

const map = createMap();

scene.add(ambientLight);
scene.add(dirLight.getLight());
// scene.add(player.getMesh());
scene.add(player.cameraContainer);
scene.add(map);

renderer.render(scene, camera.getCamera());
renderer.setAnimationLoop(animate);

function animate() {
  animateVehicles();
  animatePlayer(player);
  renderer.render(scene, camera.getCamera());
}
