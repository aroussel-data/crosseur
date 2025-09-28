import { TILE_SIZE, TOTAL_XAXIS_TILES } from "@/constants";
import * as THREE from "three";

export class Road {
  private mesh: THREE.Mesh;

  constructor(index: number) {
    const geometry = new THREE.BoxGeometry(
      TOTAL_XAXIS_TILES * TILE_SIZE,
      TILE_SIZE,
    );
    const material = new THREE.MeshLambertMaterial({ color: 0x303030 });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.y = index * TILE_SIZE;
    this.mesh.receiveShadow = true;
  }

  public getMesh(): THREE.Mesh {
    return this.mesh;
  }

  public setPosition(x: number, y: number, z: number): void {
    this.mesh.position.set(x, y, z);
  }
}
