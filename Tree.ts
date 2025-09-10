import * as THREE from "three";

export class Tree {
  private tree: THREE.Group;

  constructor(trunkHeight: number = 20, leavesHeight: number = 45) {
    const trunkGeometry = new THREE.BoxGeometry(10, 10, trunkHeight);
    const trunkMaterial = new THREE.MeshLambertMaterial({
      color: "brown",
      flatShading: true,
    });
    const leavesGeometry = new THREE.BoxGeometry(20, 20, leavesHeight);
    const leavesMaterial = new THREE.MeshLambertMaterial({
      color: 0x224222,
      flatShading: true,
    });
    const trunkMesh = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunkMesh.castShadow = true;
    trunkMesh.receiveShadow = true;
    const leavesMesh = new THREE.Mesh(leavesGeometry, leavesMaterial);
    leavesMesh.castShadow = true;
    leavesMesh.receiveShadow = true;
    this.tree = new THREE.Group();
    trunkMesh.position.z = trunkHeight / 2;
    if (leavesHeight > 2 * trunkHeight) {
      leavesMesh.position.z = leavesHeight - trunkHeight / 2;
    } else {
      leavesMesh.position.z = leavesHeight;
    }
    this.tree.add(trunkMesh);
    this.tree.add(leavesMesh);
  }

  public getTree(): THREE.Group {
    return this.tree;
  }

  public setPosition(x: number, y: number, z: number): void {
    this.tree.position.set(x, y, z);
  }
}
