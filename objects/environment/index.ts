import * as THREE from "three";

import { Grass } from "./Grass";
import { Tree } from "./Tree";
import { Road } from "./Road";
import Car from "@objects/vehicles/car";
import { MAP_METADATA } from "./MapMetadata";
import { TILE_SIZE } from "@/constants";

export default function createMap(): THREE.Group {
  const map = new THREE.Group();
  for (const mapData of MAP_METADATA) {
    if (mapData.type === "tree") {
      const tree = new Tree(mapData.trunkHeight, mapData.leavesHeight);
      tree.setPosition(
        mapData.xIndex * TILE_SIZE,
        mapData.yIndex * TILE_SIZE,
        0,
      );
      map.add(tree.getTree());
    } else if (mapData.type === "grass") {
      const grassPatch = new Grass(mapData.yIndex);
      map.add(grassPatch.getMesh());
    } else if (mapData.type === "road") {
      const road = new Road(mapData.yIndex);
      for (const vehicle of mapData.vehicles) {
        if (vehicle.type === "car") {
          const car = new Car(
            mapData.yIndex,
            vehicle.xIndex,
            vehicle.color,
            vehicle.rotated,
          );
          vehicle.ref = car.group;
          map.add(car.group);
        } else {
          throw new Error(`Unknown vehicle type: ${vehicle.type}`);
        }
      }
      map.add(road.getMesh());
    } else {
      throw new Error(`Unknown map data type: ${mapData}`);
    }
  }
  return map;
}
