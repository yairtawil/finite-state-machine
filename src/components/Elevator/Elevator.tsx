import * as React from 'react';
import './Elevator.css';
import { connect } from 'react-redux';
import { IState } from '../../reducers';
import { config } from '../../config/config';
import { IBuilding } from '../../model/building';

export interface IElevatorProps {
  floor: number;
  selectedBuilding: string;
}

class Elevator extends React.Component<IElevatorProps> {
  prevFloor = 0;

  render() {
    const { floor, selectedBuilding } = this.props;
    const building: IBuilding = config.buildings[selectedBuilding];
    const transitionStyle = `all ${ config.elevatorTransition * (Math.abs(this.prevFloor - floor)) }s ease-in 0s`;
    this.prevFloor = floor;
    return (<div className='building-container'>
        <div className='elevator' style={{
          transition: transitionStyle,
          transform: `translateY( -${ building.floors[ floor ].height }px )`
        }}>
          <img src='Elevator.svg'/>
        </div>
        <div className='building'>
          <img src='Building.svg'/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IState): IElevatorProps => ({
  floor: state.elevator.floor,
  selectedBuilding: state.elevator.selectedBuilding
});

export default connect(mapStateToProps)(Elevator);
