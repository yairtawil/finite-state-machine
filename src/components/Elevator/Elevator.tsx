import * as React from 'react';
import './Elevator.css';
import { connect } from 'react-redux';
import { IState } from '../../reducers';
import { config } from '../../config/config';
import { IBuilding } from '../../model/building';
import { BuildingRecord } from '../../reducers/building';

export interface IElevatorProps {
  floor: number;
  selected: string;
  buildings: BuildingRecord;
}

class Elevator extends React.Component<IElevatorProps> {
  prevFloor = 0;

  render() {
    const { floor, selected, buildings } = this.props;
    const building: IBuilding = buildings[ selected ];
    if (!building) {
      return null;
    }
    const transitionStyle = `all ${ config.elevatorTransition * (Math.abs(this.prevFloor - floor)) }s ease-in 0s`;
    this.prevFloor = floor;
    return (<div className='elevator' style={{
        transition: transitionStyle,
        transform: `translateY( -${ building.floors[ floor ].height }px )`
      }}>
        <img src='Elevator.svg'/>
      </div>
    );
  }
}

const mapStateToProps = (state: IState): IElevatorProps => ({
  buildings: state.building.buildings,
  floor: state.elevator.floor,
  selected: state.building.selected
});

export default connect(mapStateToProps)(Elevator);
