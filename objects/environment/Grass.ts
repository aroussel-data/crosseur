import { TILE_SIZE, TOTAL_XAXIS_TILES } from "@/constants";
import * as THREE from "three";

export class Grass {
  private mesh: THREE.Mesh;

  constructor(index: number) {
    const geometry = new THREE.BoxGeometry(
      TOTAL_XAXIS_TILES * TILE_SIZE,
      TILE_SIZE,
      3,
    );
    const material = new THREE.MeshLambertMaterial({ color: "green" });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.y = index * TILE_SIZE;
    this.mesh.receiveShadow = true;
    // TODO: create left and right offscreen sections using different colour
  }

  public getMesh(): THREE.Mesh {
    return this.mesh;
  }

  public setPosition(x: number, y: number, z: number): void {
    this.mesh.position.set(x, y, z);
  }
}
