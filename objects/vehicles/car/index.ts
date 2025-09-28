import * as THREE from "three";
import { Wheel } from "./Wheel";
import { Cabin } from "./Cabin";
import { Body } from "./Body";
import { TILE_SIZE } from "@/constants";

export default class {
  readonly group: THREE.Group;

  constructor(
    yIndex: number,
    xIndex: number = 0,
    colour: string,
    rotated: boolean = false,
  ) {
    this.group = new THREE.Group();
    this.group.position.y = yIndex * TILE_SIZE;
    this.group.position.x = xIndex * 20;
    if (rotated) {
      this.group.rotation.z = Math.PI;
    }

    const body = new Body(colour);
    const cabin = new Cabin();

    const frontWheels = new Wheel(15);
    const rearWheels = new Wheel(-15);

    this.group.add(body.mesh);
    this.group.add(cabin.mesh);
    this.group.add(frontWheels.mesh);
    this.group.add(rearWheels.mesh);
  }
}
