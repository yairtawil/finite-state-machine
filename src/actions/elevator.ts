import { IAction } from './index';

export enum ElevatorActionTypes {
  PRESS_FLOOR = 'PRESS'
}

export type ElevatorAction<P = any> = IAction<ElevatorActionTypes, P>;

export const pressFloor = (floor: number): ElevatorAction<typeof floor> => ({
  type: ElevatorActionTypes.PRESS_FLOOR,
  payload: floor
});
