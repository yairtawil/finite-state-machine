import * as React from 'react';
import './Elevator.css';
import { connect } from 'react-redux';
import { IState } from '../../reducers';

const heights = [
  0,
  70,
  149,
  229,
  307
];

const transition = 0.1;

export interface IElevatorProps {
  floor: number;
}

class Elevator extends React.Component<IElevatorProps> {
  prevFloor = 0;

  render() {
    const { floor } = this.props;
    const transitionStyle = `all ${ transition * (Math.abs(this.prevFloor - floor)) }s ease-in 0s`;
    this.prevFloor = floor;
    return (<div className='building-container'>
        <div className='elevator' style={{
          transition: transitionStyle,
          transform: `translateY( -${ heights[ floor ] }px )`
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
});

export default connect(mapStateToProps)(Elevator);
