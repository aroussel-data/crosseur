import * as THREE from 'three';

import { Grass } from './Grass';
import { Tree } from './Tree';
import { TREES } from './constants';

// Dimensions of grass should be a constant
// Number of trees and their positions should also be configurable

export function createMap(): THREE.Group {
	const map = new THREE.Group();
	for (let i = 0; i <= 3; i += 1) {
		const grassPatch = new Grass(i);
		map.add(grassPatch.getMesh());
	}
	for (const treeData of TREES) {
		const tree = new Tree(treeData.trunkHeight, treeData.leavesHeight);
		tree.setPosition(
			treeData.xLaneNo * 42 + 21,
			treeData.yLaneNo * 20,
			0
		);
		map.add(tree.getTree());
	}
	return map;
}
