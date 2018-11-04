import * as React from 'react';
import { AppBar, MenuItem, Select, Toolbar } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBuilding } from '../../actions/building';
import { IState } from '../../reducers';

const Header = ({ buildings, selectedBuilding, selectBuilding: _selectBuilding }) => (
  <AppBar color="primary" position='relative'>
    <Toolbar className="root">
      <Select
        onChange={(event: any) => _selectBuilding(event.target.value)}
        displayEmpty={true}
        value={selectedBuilding}
        inputProps={{
          name: 'building',
          id: 'age-simple'
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {
          Object.keys(buildings).map((key) => (
            <MenuItem key={key} value={key}> Building A </MenuItem>
          ))
        }
      </Select>
    </Toolbar>
  </AppBar>
);

const mapStateToProps = (state: IState) => ({ selectedBuilding: state.building.selected, buildings: state.building.buildings  });
const mapDispatchToProps = (dispatch: any) => bindActionCreators({ selectBuilding }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Header);
