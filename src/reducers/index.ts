import { combineReducers } from 'redux';
import elevator, { IElevatorState } from './elevator';
import building, { IBuildingState } from './building';

export interface IState {
  elevator: IElevatorState;
  building: IBuildingState;
}

export default combineReducers({
  elevator,
  building
});
