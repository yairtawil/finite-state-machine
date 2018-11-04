import { BuildingRecord } from '../reducers/building';
import { IAction } from './index';

export enum BuildingActionTypes {
  FETCH_BUILDINGS = 'FETCH_BUILDINGS',
  RECEIVE_BUILDINGS = 'RECEIVE_BUILDINGS',
  SELECT_BUILDING = 'SELECT_BUILDING'
}

export type BuildingAction<P = any> = IAction<BuildingActionTypes, P>

export const selectBuilding = (building: string): BuildingAction<string> => ({
  type: BuildingActionTypes.SELECT_BUILDING,
  payload: building
});

export const fetchBuildings = (): BuildingAction => ({
  type: BuildingActionTypes.FETCH_BUILDINGS
});

export const receiveBuildings = (buildings: BuildingRecord): BuildingAction<BuildingRecord> => ({
  type: BuildingActionTypes.RECEIVE_BUILDINGS,
  payload: buildings
});
