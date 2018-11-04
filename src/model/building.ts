export interface IFloor {
  height: number;
  floor: number;
}

export interface IBuilding {
  name: string;
  floors: IFloor[];
}
