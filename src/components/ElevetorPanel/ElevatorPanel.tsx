import * as React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import './ElevatorPanel.css';
import { Card, withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pressFloor } from '../../actions/elevator';
import { IState } from '../../reducers';
import { config } from '../../config/config';
import { IFloor } from '../../model/building';
import GlowButton from '../GlowButton/GlowButton';

const styles = {
  card: {
    padding: '0 70px'
  },
  buttonGlow: {
    background: 'red',
    '&:hover': {
      background: '#ce0000'
    }
  },
  media: {
    height: 140
  }
};

const ElevatorPanel = ({ classes, pressFloor: _pressFloor, floor, selectedBuilding }) => {
  const building = config.buildings[selectedBuilding];
  return <Card className={classes.card}>
    <h1>
      hello!
    </h1>
    <GlowButton/>
    <Button variant="fab" color="primary" aria-label="Add">
      <AddIcon/>
    </Button>
    <div className='btns-group'>
      {
        [...building.floors].reverse()
          .map(({ floor: _floor }: IFloor) => (

          <Button variant="fab"
                  color="primary"
                  className={_floor === floor ? classes.buttonGlow : ''}
                  onClick={() => _pressFloor(_floor)}
                  key={_floor}>
            {_floor}
          </Button>
        ))
      }
    </div>
  </Card>;
};

const mapStateToProps = (state: IState) => ({
  floor: state.elevator.floor,
  selectedBuilding: state.elevator.selectedBuilding
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ pressFloor }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ElevatorPanel));
