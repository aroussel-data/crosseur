import * as THREE from 'three';

import { Grass } from './Grass';
import { Tree } from './Tree';
import { Road } from './Road';
import { Car } from './Car';
import { MAP_METADATA } from './MapMetadata';

export function createMap(): THREE.Group {
	const map = new THREE.Group();
	for (const mapData of MAP_METADATA) {
		if (mapData.type === 'tree') {
			const tree = new Tree(mapData.trunkHeight, mapData.leavesHeight);
			tree.setPosition(
				mapData.xIndex * 42 + 21,
				mapData.yIndex * 20,
				0
			);
			map.add(tree.getTree());
		}
		else if (mapData.type === 'grass') {
			const grassPatch = new Grass(mapData.xIndex);
			map.add(grassPatch.getMesh());
		}
		else if (mapData.type === 'road') {
			const road = new Road(mapData.xIndex);
			// TODO: place multiple vehicles in a lane
			// car yIndex should be configurable
			const car = new Car(mapData.xIndex, 0, "blue");
			map.add(road.getMesh());
			map.add(car.getMesh());
		} else {
			throw new Error(`Unknown map data type: ${mapData}`);
		}
	}
	return map;
}
