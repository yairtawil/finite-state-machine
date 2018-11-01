export enum ElevatorActionTypes {
  PRESS_FLOOR = 'PRESS'
}

export interface IElevatorAction<P = any> {
  readonly type: ElevatorActionTypes;
  payload?: P;
}

export const pressFloor = (floor: number): IElevatorAction<typeof floor> => ({
  type: ElevatorActionTypes.PRESS_FLOOR,
  payload: floor
});
