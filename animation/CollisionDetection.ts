import * as THREE from "three";
import { Player } from "@objects/Player";
import { MAP_METADATA, RoadData } from "@objects/environment/MapMetadata";

export function detectCollisions(player: Player): void {
  const collidableRoad = MAP_METADATA.filter((m) => {
    return m.type === "road" && m.yIndex === player.position.yAxis;
  })[0] as RoadData | undefined;

  if (!collidableRoad) return;

  const playerBox = new THREE.Box3().setFromObject(player.player);

  for (const vehicle of collidableRoad.vehicles) {
    if (vehicle.ref === null) continue;

    const vehicleBox = new THREE.Box3().setFromObject(vehicle.ref);
    if (playerBox.intersectsBox(vehicleBox)) {
      // Collision detected
      window.location.reload();
    }
  }
}
