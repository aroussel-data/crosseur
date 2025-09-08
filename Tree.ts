import * as THREE from 'three';

export class Tree {
	private tree: THREE.Group;

	constructor(trunkHeight: number = 20, leavesHeight: number = 45) {
		const trunkGeometry = new THREE.BoxGeometry(10, 10, trunkHeight);
		const trunkMaterial = new THREE.MeshLambertMaterial({ color: "brown", flatShading: true });
		const leavesGeometry = new THREE.BoxGeometry(20, 20, leavesHeight);
		const leavesMaterial = new THREE.MeshLambertMaterial({ color: 0x224222, flatShading: true });
		const trunkMesh = new THREE.Mesh(trunkGeometry, trunkMaterial);
		const leavesMesh = new THREE.Mesh(leavesGeometry, leavesMaterial);
		this.tree = new THREE.Group();
		trunkMesh.position.z = trunkHeight / 2; // Set the Z position to be above the ground
		leavesMesh.position.z = leavesHeight; // Set the Z position to be above the ground
		// TODO: if leavesHeight is more than twice trunkHeight then scale trunk up
		this.tree.add(trunkMesh);
		this.tree.add(leavesMesh);
	}

	public getTree(): THREE.Group {
		return this.tree;
	}

	public setPosition(x: number, y: number, z: number): void {
		this.tree.position.set(x, y, z);
	}
}
