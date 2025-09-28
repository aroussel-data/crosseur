import * as THREE from "three";
import { MAP_METADATA } from "@objects/environment/MapMetadata";

export class Player {
  player: THREE.Group;
  cameraContainer: THREE.Group;
  position: {
    xAxis: number;
    yAxis: number;
  } = { xAxis: 0, yAxis: 0 };
  movesQueue: string[] = [];

  constructor() {
    this.player = new THREE.Group();

    const geometry = new THREE.BoxGeometry(15, 15, 20);
    const material = new THREE.MeshLambertMaterial({
      color: "white",
      flatShading: true,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.z = 10; // Set the Z position to be above the ground
    mesh.castShadow = true;
    mesh.receiveShadow = true;

    this.player.add(mesh);

    const cap = new THREE.Mesh(
      new THREE.BoxGeometry(2, 4, 2),
      new THREE.MeshLambertMaterial({
        color: 0xf0619a,
        flatShading: true,
      }),
    );
    cap.position.z = 21;
    cap.castShadow = true;
    cap.receiveShadow = true;
    this.player.add(cap);

    this.cameraContainer = new THREE.Group();
    this.cameraContainer.add(this.player);
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

    const mesh = this.cameraContainer;
    mesh.position.x = THREE.MathUtils.lerp(startX, endX, progress);
    mesh.position.y = THREE.MathUtils.lerp(startY, endY, progress);
    if (mesh.children[0]) {
      mesh.children[0].position.z = Math.sin(progress * Math.PI) * 8; // +10 to keep above ground
    } else {
      throw new Error("Player camera container has no children");
    }
  }

  public calculateFinalPosition(move: string): {
    xAxis: number;
    yAxis: number;
  } {
    const simulatedMovesQueue = [...this.movesQueue, move];
    return simulatedMovesQueue.reduce((position, direction) => {
      if (direction == "forward") {
        return { xAxis: position.xAxis, yAxis: position.yAxis + 1 };
      }
      if (direction == "backward") {
        return { xAxis: position.xAxis, yAxis: position.yAxis - 1 };
      }
      if (direction == "right") {
        return { xAxis: position.xAxis + 1, yAxis: position.yAxis };
      }
      if (direction == "left") {
        return { xAxis: position.xAxis - 1, yAxis: position.yAxis };
      }
      return position;
    }, this.position);
  }

  public isFinalPositionValid(move: string): boolean {
    const finalPosition = this.calculateFinalPosition(move);
    // Do we hit the edge of the board?
    const minYBoundary = -3;
    const maxYBoundary = 7;
    const minXBoundary = -8;
    const maxXBoundary = 8;
    if (
      finalPosition.xAxis < minXBoundary ||
      finalPosition.xAxis > maxXBoundary ||
      finalPosition.yAxis < minYBoundary ||
      finalPosition.yAxis > maxYBoundary
    )
      return false;

    // Is there a tree in the way?
    const trees = MAP_METADATA.filter((row) => row.type === "tree");
    for (const tree of trees) {
      if (
        tree.yIndex === finalPosition.yAxis &&
        tree.xIndex === finalPosition.xAxis
      )
        return false;
    }
    return true;
  }

  public enqueueMove(move: string): void {
    if (!this.isFinalPositionValid(move)) return;
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
