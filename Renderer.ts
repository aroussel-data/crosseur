import * as THREE from 'three';

export class Renderer {
	private renderer: THREE.WebGLRenderer;

	constructor() {
		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild(this.renderer.domElement);
	}

	public render(scene: THREE.Scene, camera: THREE.Camera): void {
		this.renderer.render(scene, camera);
	}

	public setAnimationLoop(callback: () => void): void {
		this.renderer.setAnimationLoop(callback);
	}
}
