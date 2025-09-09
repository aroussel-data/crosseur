import * as THREE from 'three';

export class Road {
	private mesh: THREE.Mesh;

	constructor(index: number) {
		const geometry = new THREE.BoxGeometry(17 * 42, 42);
		const material = new THREE.MeshLambertMaterial({ color: 0x303030 });
		this.mesh = new THREE.Mesh(geometry, material);
		this.mesh.position.y = index * 42;
		this.mesh.receiveShadow = true;
	}

	public getMesh(): THREE.Mesh {
		return this.mesh;
	}

	public setPosition(x: number, y: number, z: number): void {
		this.mesh.position.set(x, y, z);
	}
}
