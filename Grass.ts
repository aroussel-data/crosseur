import * as THREE from 'three';

export class Grass {
	private mesh: THREE.Mesh;

	// need to be able to add Tree objects to Grass lane
	// define a Tree class that can be added to Grass
	// each Tree will be added at an index on the Grass lane
	// convert Grass into a group that holds its floor and trees

	constructor(index: number) {
		const geometry = new THREE.BoxGeometry(17 * 42, 42, 3);
		const material = new THREE.MeshLambertMaterial({ color: "green" });
		this.mesh = new THREE.Mesh(geometry, material);
		this.mesh.position.y = index * 42;
		// this.mesh.position.z = 1.5;
	}

	public getMesh(): THREE.Mesh {
		return this.mesh;
	}

	public setPosition(x: number, y: number, z: number): void {
		this.mesh.position.set(x, y, z);
	}
}
