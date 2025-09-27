import * as THREE from "three";

export class DirectionalLight {
  private directionalLight: THREE.DirectionalLight;

  constructor() {
    this.directionalLight = new THREE.DirectionalLight();
    this.directionalLight.position.set(-100, -100, 200);
    this.directionalLight.up.set(0, 0, 1);
    this.directionalLight.castShadow = true;

    this.directionalLight.shadow.mapSize.width = 2048;
    this.directionalLight.shadow.mapSize.height = 2048;

    this.directionalLight.shadow.camera.up.set(0, 0, 1);
    this.directionalLight.shadow.camera.left = -400;
    this.directionalLight.shadow.camera.right = 400;
    this.directionalLight.shadow.camera.top = 400;
    this.directionalLight.shadow.camera.bottom = -400;
    this.directionalLight.shadow.camera.near = 50;
    this.directionalLight.shadow.camera.far = 400;
  }

  public getLight(): THREE.DirectionalLight {
    return this.directionalLight;
  }

  public setPosition(x: number, y: number, z: number): void {
    this.directionalLight.position.set(x, y, z);
  }
}
