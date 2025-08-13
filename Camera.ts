import * as THREE from 'three';

export class Camera {
	private camera: THREE.OrthographicCamera;
	private size = 300;
	private viewRatio = window.innerWidth / window.innerHeight;
	private width = this.viewRatio < 1 ? this.size : this.size * this.viewRatio;
	private height = this.viewRatio < 1 ? this.size / this.viewRatio : this.size;

	constructor() {
		this.camera = new THREE.OrthographicCamera(
			this.width / -2, this.width / 2,
			this.height / 2, this.height / -2,
			100,
			900
		);
		this.camera.up.set(0, 0, 1); // Set the up direction to Z-axis
	}

	public getCamera(): THREE.OrthographicCamera {
		return this.camera;
	}

	public setPosition(x: number, y: number, z: number): void {
		this.camera.position.set(x, y, z);
	}

	public lookAt(x: number, y: number, z: number): void {
		this.camera.lookAt(x, y, z);
	}
}
