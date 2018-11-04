export interface IFloor {
  height: number;
  floor: number;
}

export interface IBuilding {
  imageUrl: string;
  name: string;
  floors: IFloor[];
}
