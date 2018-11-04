import { ElevatorActionTypes, ElevatorAction } from '../actions/elevator';
import { IElevatorFiniteState } from '../model/elevator';

export interface IElevatorState {
  readonly floor: number;
  readonly state: IElevatorFiniteState;
}

const elevatorInitialState: IElevatorState = {
  floor: 0,
  state: IElevatorFiniteState.Idle,
};

const elevator = (state: IElevatorState = elevatorInitialState, action: ElevatorAction): IElevatorState => {
  switch (action.type) {
    case ElevatorActionTypes.PRESS_FLOOR:
      return { ...state, floor: action.payload };
    case 'START' as any:
    case 'END'  as any:
      console.log(action);
    default:
      return state;
  }
};
export default elevator;
