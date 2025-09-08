import * as THREE from 'three';

import { Renderer } from './Renderer';
import { Camera } from './Camera';
import { Player } from './Player';
import { createMap } from './Map';

const scene: THREE.Scene = new THREE.Scene();
const camera = new Camera();
camera.setPosition(300, -300, 300);
camera.lookAt(0, 0, 0);

const renderer = new Renderer();

const player = new Player();

const ambientLight = new THREE.AmbientLight();

const dirLight = new THREE.DirectionalLight();
dirLight.position.set(-100, -100, 200);

const map = createMap();

scene.add(ambientLight);
scene.add(dirLight);
scene.add(player.getMesh());
scene.add(map);

function animate() {
	renderer.render(scene, camera.getCamera());
}
renderer.setAnimationLoop(animate);
