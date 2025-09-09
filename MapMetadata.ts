interface GrassData {
	type: "grass";
	xIndex: number;
}

interface RoadData {
	type: "road";
	xIndex: number;
}

interface TreeData {
	type: "tree";
	trunkHeight: number;
	leavesHeight: number;
	xIndex: number;
	yIndex: number;
}

type MapMetadata = GrassData | TreeData | RoadData;

export const MAP_METADATA: MapMetadata[] = [
	// Grass
	{
		type: "grass", xIndex: 0,
	},
	{
		type: "grass", xIndex: 1,
	},
	{
		type: "grass", xIndex: 2,
	},
	// {
	// 	type: "grass", xIndex: 3,
	// },
	{
		type: "grass", xIndex: 4,
	},
	{
		type: "grass", xIndex: 5,
	},
	// {
	// 	type: "grass", xIndex: 6,
	// },
	{
		type: "grass", xIndex: 7,
	},
	// Roads
	// TODO: roads should have array of vehicles
	{
		type: "road", xIndex: 3,
	},
	{
		type: "road", xIndex: 6,
	},
	// Trees
	{
		type: "tree", trunkHeight: 20, leavesHeight: 30, xIndex: -4, yIndex: 2,
	},
	{
		type: "tree", trunkHeight: 20, leavesHeight: 40, xIndex: 1, yIndex: 1,
	},
	{
		type: "tree", trunkHeight: 20, leavesHeight: 55, xIndex: 2, yIndex: 4,
	},
	{
		type: "tree", trunkHeight: 20, leavesHeight: 40, xIndex: 4, yIndex: 4,
	},
];
