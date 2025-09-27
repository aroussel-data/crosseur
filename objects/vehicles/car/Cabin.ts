import * as THREE from "three";

export class Cabin {
  readonly mesh: THREE.Mesh;

  constructor() {
    this.mesh = new THREE.Mesh(
      new THREE.BoxGeometry(33, 24, 12),
      new THREE.MeshLambertMaterial({ color: "white", flatShading: true }),
    );
    this.mesh.position.x = -6;
    this.mesh.position.z = 25.5;
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
  }
}
