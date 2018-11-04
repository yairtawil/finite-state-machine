import { ElevatorActionTypes, IElevatorAction } from '../actions/elevator';
import { IElevatorFiniteState } from '../model/elevator';

export interface IElevatorState {
  readonly floor: number;
  readonly state: IElevatorFiniteState;
  readonly selectedBuilding: string;
}

const elevatorInitialState: IElevatorState = {
  floor: 0,
  state: IElevatorFiniteState.Idle,
  selectedBuilding: 'building1'
};

const elevator = (state: IElevatorState = elevatorInitialState, action: IElevatorAction): IElevatorState => {
  switch (action.type) {
    case ElevatorActionTypes.PRESS_FLOOR:
      return { ...state, floor: action.payload };
    default:
      return state;
  }
};
export default elevator;
