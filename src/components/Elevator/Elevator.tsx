import * as React from 'react';
import './Elevator.css';

class Elevator extends React.Component {
  state: { floor: 0 } = {};

  public render() {
    return (
      <div>
        <img src={'Elevator.svg'}/>
      </div>
    );
  }
}

export default Elevator;
