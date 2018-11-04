import * as React from 'react';
import { connect } from 'react-redux';
import { IState } from '../../reducers';
import { IBuilding } from '../../model/building';
import './Building.css';

const Building = ({ selected, buildings }) => {
  const building: IBuilding = buildings[ selected ];
  if (!building) {
    return null;
  }
  return (<div className='building'>
      <img src={building.imageUrl || 'Building.svg'}/>
    </div>
  );
};

const mapStateToProps = (state: IState) => ({
  selected: state.building.selected,
  buildings: state.building.buildings
});

export default connect(mapStateToProps)(Building);
