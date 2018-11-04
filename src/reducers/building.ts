import { IBuilding } from '../model/building';
import { BuildingActionTypes, BuildingAction } from '../actions/building';

export type BuildingRecord = Record<string, IBuilding>;

export interface IBuildingState {
  readonly loading: boolean;
  readonly buildings: BuildingRecord;
  readonly selected: string;
}

const buildingInitialState: IBuildingState = {
  loading: false,
  buildings: {},
  selected: ''
};

const building = (state: IBuildingState = buildingInitialState, action: BuildingAction): IBuildingState => {
  switch (action.type) {
    case BuildingActionTypes.FETCH_BUILDINGS:
      console.log("fetching")
      return { ...state, loading: true };
    case BuildingActionTypes.RECEIVE_BUILDINGS:
      console.log("receving", action.payload)
      return { ...state, loading: false, buildings: action.payload };
    case BuildingActionTypes.SELECT_BUILDING:
      return { ...state, selected: action.payload };
    default:
      return state;
  }
};

export default building;
