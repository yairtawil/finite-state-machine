import { ElevatorAction } from './elevator';
import { BuildingAction } from './building';
import { Action } from 'redux';

export interface IAction<T, P> extends Action<T> {
  payload?: P
}

export type Actions = ElevatorAction | BuildingAction;
