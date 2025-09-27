import * as THREE from "three";

export class Body {
  readonly mesh: THREE.Mesh;

  constructor(colour: string) {
    this.mesh = new THREE.Mesh(
      new THREE.BoxGeometry(60, 30, 15),
      new THREE.MeshLambertMaterial({ color: colour, flatShading: true }),
    );
    this.mesh.position.z = 12;
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
  }
}
