import { combineReducers } from 'redux';
import elevator, { IElevatorState } from './elevator';

export interface IState {
  elevator: IElevatorState;
}

export default combineReducers({
  elevator
});
