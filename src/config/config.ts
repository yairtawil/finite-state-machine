import { IBuilding } from '../model/building';

export interface IAppConfig {
  elevatorTransition: number;
  buildings: { [ key: string ]: IBuilding };
}

export const config: IAppConfig = {
  elevatorTransition: 0.2,
  buildings: {
    'building1': {
      name: 'building1',
      floors: [
        { floor: 0, height: 0 },
        { floor: 1, height: 70 },
        { floor: 2, height: 149 },
        { floor: 3, height: 229 },
        { floor: 4, height: 307 }
      ]
    }
  }
};
