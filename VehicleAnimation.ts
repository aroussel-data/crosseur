import * as THREE from "three";

import { MAP_METADATA } from "./MapMetadata";

const clock = new THREE.Clock();

export function animateVehicles() {
  const delta = clock.getDelta();
  for (const mapData of MAP_METADATA) {
    if (mapData.type === "road") {
      for (const vehicle of mapData.vehicles) {
        if (vehicle.type === "car" && vehicle.ref) {
          if (vehicle.rotated) {
            vehicle.ref.position.x =
              vehicle.ref.position.x < -8 * 42
                ? 8 * 42
                : vehicle.ref.position.x - 40 * delta;
          } else {
            vehicle.ref.position.x =
              vehicle.ref.position.x > 8 * 42
                ? -8 * 42
                : vehicle.ref.position.x + 40 * delta;
          }
        }
      }
    }
  }
}
