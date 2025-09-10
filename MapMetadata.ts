import * as THREE from "three";

interface GrassData {
  type: "grass";
  yIndex: number;
}

interface RoadData {
  type: "road";
  yIndex: number;
  vehicles: {
    type: "car" | "truck";
    xIndex: number;
    color: string;
    rotated: boolean;
    ref: null | THREE.Group;
  }[];
}

interface TreeData {
  type: "tree";
  trunkHeight: number;
  leavesHeight: number;
  yIndex: number;
  xIndex: number;
}

type MapMetadata = GrassData | TreeData | RoadData;

export const MAP_METADATA: MapMetadata[] = [
  // Grass
  {
    type: "grass",
    yIndex: -3,
  },
  {
    type: "grass",
    yIndex: -2,
  },
  {
    type: "grass",
    yIndex: -1,
  },
  {
    type: "grass",
    yIndex: 0,
  },
  {
    type: "grass",
    yIndex: 1,
  },
  {
    type: "grass",
    yIndex: 2,
  },
  // {
  // 	type: "grass", yIndex: 3,
  // },
  {
    type: "grass",
    yIndex: 4,
  },
  {
    type: "grass",
    yIndex: 5,
  },
  // {
  // 	type: "grass", yIndex: 6,
  // },
  {
    type: "grass",
    yIndex: 7,
  },
  // Roads
  {
    type: "road",
    yIndex: 3,
    vehicles: [
      { type: "car", xIndex: 5, color: "blue", rotated: true, ref: null },
      { type: "car", xIndex: -5, color: "red", rotated: true, ref: null },
    ],
  },
  {
    type: "road",
    yIndex: 6,
    vehicles: [
      { type: "car", xIndex: 7, color: "yellow", rotated: false, ref: null },
      { type: "car", xIndex: -2, color: "green", rotated: false, ref: null },
    ],
  },
  // Trees
  {
    type: "tree",
    trunkHeight: 20,
    leavesHeight: 30,
    xIndex: -4,
    yIndex: 2,
  },
  {
    type: "tree",
    trunkHeight: 20,
    leavesHeight: 40,
    xIndex: 1,
    yIndex: 1,
  },
  {
    type: "tree",
    trunkHeight: 20,
    leavesHeight: 55,
    xIndex: 2,
    yIndex: 4,
  },
  {
    type: "tree",
    trunkHeight: 20,
    leavesHeight: 40,
    xIndex: 4,
    yIndex: 4,
  },
];
