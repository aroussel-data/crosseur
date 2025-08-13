import * as THREE from 'three';

import { Grass } from './Grass';

export function createMap(): THREE.Group {
	const map = new THREE.Group();
	for (let i = 0; i <= 3; i += 1) {
		const grassPatch = new Grass(i);
		map.add(grassPatch.getMesh());
	}
	return map;
}
