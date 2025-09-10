import * as THREE from "three";

export class Player {
  private mesh: THREE.Mesh;
  private position: {
    xAxis: number;
    yAxis: number;
  } = { xAxis: 0, yAxis: 0 };
  movesQueue: string[] = [];

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

  public setPosition(progress: number): void {
    const startX = this.position.xAxis * 42; // 20 instead?
    const startY = this.position.yAxis * 42;
    let endX = startX;
    let endY = startY;

    if (this.movesQueue[0] == "forward") endY += 42;
    if (this.movesQueue[0] == "backward") endY -= 42;
    if (this.movesQueue[0] == "right") endX += 42;
    if (this.movesQueue[0] == "left") endX -= 42;

    const mesh = this.getMesh();
    mesh.position.x = THREE.MathUtils.lerp(startX, endX, progress);
    mesh.position.y = THREE.MathUtils.lerp(startY, endY, progress);
    mesh.position.z = Math.sin(progress * Math.PI) * 8 + 10; // +10 to keep above ground
  }

  public enqueueMove(move: string): void {
    this.movesQueue.push(move);
  }

  public stepCompleted() {
    const direction = this.movesQueue.shift();
    if (direction == "forward") this.position.yAxis += 1;
    if (direction == "backward") this.position.yAxis -= 1;
    if (direction == "right") this.position.xAxis += 1;
    if (direction == "left") this.position.xAxis -= 1;
  }
}
