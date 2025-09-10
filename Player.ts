import * as THREE from "three";

export class Player {
  private mesh: THREE.Mesh;

  constructor() {
    const geometry = new THREE.BoxGeometry(15, 15, 20);
    const material = new THREE.MeshLambertMaterial({
      color: "white",
      flatShading: true,
    });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.z = 10; // Set the Z position to be above the ground
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
  }

  public getMesh(): THREE.Mesh {
    return this.mesh;
  }

  public setPosition(x: number, y: number, z: number): void {
    this.mesh.position.set(x, y, z);
  }
}
