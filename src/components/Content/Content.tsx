import * as React from 'react';
import './Content.css';
import Elevator from '../Elevator/Elevator';
import ElevatorPanel from '../ElevetorPanel/ElevatorPanel';
import Building from '../Building/Building';

const Content = () => (
  <div className={'content'}>
    <ElevatorPanel/>
    <div className='building-container'>
      <Elevator/>
      <Building/>
    </div>
  </div>
);

export default Content;
