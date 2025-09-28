import * as THREE from "three";

import { MAP_METADATA } from "@objects/environment/MapMetadata";
import {
  DEFAULT_VEHICLE_SPEED,
  MAX_XAXIS_INDEX,
  MIN_XAXIS_INDEX,
  TILE_SIZE,
} from "@/constants";

const clock = new THREE.Clock();

export function animateVehicles() {
  const delta = clock.getDelta();
  for (const mapData of MAP_METADATA) {
    if (mapData.type === "road") {
      for (const vehicle of mapData.vehicles) {
        if (vehicle.type === "car" && vehicle.ref) {
          if (vehicle.rotated) {
            vehicle.ref.position.x =
              vehicle.ref.position.x < MIN_XAXIS_INDEX * TILE_SIZE
                ? MAX_XAXIS_INDEX * TILE_SIZE
                : vehicle.ref.position.x - DEFAULT_VEHICLE_SPEED * delta; // TODO: make 150 speed configurable per vehicle lane
          } else {
            vehicle.ref.position.x =
              vehicle.ref.position.x > MAX_XAXIS_INDEX * TILE_SIZE
                ? MIN_XAXIS_INDEX * TILE_SIZE
                : vehicle.ref.position.x + DEFAULT_VEHICLE_SPEED * delta;
          }
        }
      }
    }
  }
}
