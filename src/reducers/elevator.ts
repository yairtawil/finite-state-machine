import { IElevatorAction, ElevatorActionTypes } from '../actions/elevator';

export interface IElevatorState {
  readonly floor: number;
  readonly state: string;
}

const elevatorInitialState: IElevatorState = {
  floor: 0,
  state: ''
};

const elevator = (state: IElevatorState = elevatorInitialState, action: IElevatorAction) => {
  switch (action.type) {
    case ElevatorActionTypes.PRESS_FLOOR:
      return { ...state, floor: action.payload };
    default:
      return state;
  }
};
export default elevator;
