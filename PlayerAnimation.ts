import * as THREE from "three";
import { Player } from "./Player";

const moveClock = new THREE.Clock();

export function animatePlayer(player: Player) {
  if (!player.movesQueue.length) return;

  if (!moveClock.running) moveClock.start();
  const stepTime = 0.2; // seconds
  const progress = Math.min(moveClock.getElapsedTime() / stepTime, 1);

  player.setPosition(progress);
  // TODO: add setRotation function if needed

  if (progress >= 1) {
    player.stepCompleted();
    moveClock.stop();
  }
}
