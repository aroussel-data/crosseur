import * as THREE from 'three';

export class Tree {
	private trunkMesh: THREE.Mesh;
	private leavesMesh: THREE.Mesh;

	constructor(height: number) {
		const trunkGeometry = new THREE.BoxGeometry(5, 5, 20);
		const trunkMaterial = new THREE.MeshLambertMaterial({ color: "brown", flatShading: true });
		const leavesGeometry = new THREE.BoxGeometry(20, 20, 40);
		const leavesMaterial = new THREE.MeshLambertMaterial({ color: "blue", flatShading: true });
		this.trunkMesh = new THREE.Mesh(trunkGeometry, trunkMaterial);
		this.leavesMesh = new THREE.Mesh(leavesGeometry, leavesMaterial);
		this.trunkMesh.position.z = 10; // Set the Z position to be above the ground
		this.leavesMesh.position.z = 50; // Set the Z position to be above the ground
	}

	public getTrunkMesh(): THREE.Mesh {
		return this.trunkMesh;
	}

	public getLeavesMesh(): THREE.Mesh {
		return this.leavesMesh;
	}

	public setPosition(x: number, y: number, z: number): void {
		this.trunkMesh.position.set(x, y, z);
		// this.leavesMesh.position.set(x, y, z);
	}
}
