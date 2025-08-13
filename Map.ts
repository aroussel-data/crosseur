import * as THREE from 'three';

import { Grass } from './Grass';
import { Tree } from './Tree';

export function createMap(): THREE.Group {
	const map = new THREE.Group();
	for (let i = 0; i <= 3; i += 1) {
		const grassPatch = new Grass(i);
		map.add(grassPatch.getMesh());
		const tree = new Tree(20, 45);
		tree.getTree().position.y = 20; // Center the tree in the grass patch
		tree.getTree().position.x = i * 42 + 21; // Center the tree in the grass patch
		tree.setPosition(i * 42 + 21, 20, 0); // Set the position of the tree
		map.add(tree.getTree());
	}
	return map;
}
