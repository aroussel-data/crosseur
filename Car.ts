import * as THREE from 'three';

export class Car {
	private car: THREE.Group;

	constructor(xIndex: number, yIndex: number = 0, color: string, rotated: boolean = false) {
		this.car = new THREE.Group();
		this.car.position.y = xIndex * 42;
		this.car.position.x = yIndex * 20;
		if (rotated) { this.car.rotation.z = Math.PI };

		const body = new THREE.Mesh(
			new THREE.BoxGeometry(60, 30, 15),
			new THREE.MeshLambertMaterial({ color: color, flatShading: true })
		);
		body.position.z = 12;
		body.castShadow = true;
		body.receiveShadow = true;

		const cabin = new THREE.Mesh(
			new THREE.BoxGeometry(33, 24, 12),
			new THREE.MeshLambertMaterial({ color: "white", flatShading: true })
		);
		cabin.position.x = -6;
		cabin.position.z = 25.5;
		cabin.castShadow = true;
		cabin.receiveShadow = true;

		// TODO: Create separate wheel objects
		const frontWheels = new THREE.Mesh(
			new THREE.BoxGeometry(15, 33, 12),
			new THREE.MeshLambertMaterial({ color: "black", flatShading: true })
		);
		frontWheels.position.x = 15;
		frontWheels.position.z = 6;
		frontWheels.castShadow = true;
		frontWheels.receiveShadow = true;

		const rearWheels = new THREE.Mesh(
			new THREE.BoxGeometry(15, 33, 12),
			new THREE.MeshLambertMaterial({ color: "black", flatShading: true })
		);
		rearWheels.position.x = -15;
		rearWheels.position.z = 6;
		rearWheels.castShadow = true;
		rearWheels.receiveShadow = true;

		this.car.add(body);
		this.car.add(cabin);
		this.car.add(frontWheels);
		this.car.add(rearWheels);
	}

	public getMesh(): THREE.Group {
		return this.car;
	}
}
