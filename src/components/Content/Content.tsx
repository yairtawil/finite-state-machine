import * as React from 'react';
import './Content.css';
import Elevator from '../Elevator/Elevator';
import ElevatorPanel from '../ElevetorPanel/ElevatorPanel';

const Content = () => (
  <div className={'content'}>
    <ElevatorPanel/>
    <Elevator/>
  </div>
);

export default Content;
