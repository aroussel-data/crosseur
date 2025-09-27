import * as THREE from "three";

export class Wheel {
  readonly mesh: THREE.Mesh;

  constructor(axlePosition: number) {
    this.mesh = new THREE.Mesh(
      new THREE.BoxGeometry(15, 33, 12),
      new THREE.MeshLambertMaterial({ color: "black", flatShading: true }),
    );
    this.mesh.position.x = axlePosition;
    this.mesh.position.z = 6;
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
  }
}
