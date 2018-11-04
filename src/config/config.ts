export interface IAppConfig {
  elevatorTransition: number;
  fetchBuildingsUrl: string;
}

export const config: IAppConfig = {
  elevatorTransition: 0.2,
  fetchBuildingsUrl: 'buildings.json'
};
