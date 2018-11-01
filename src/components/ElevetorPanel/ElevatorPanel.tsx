import * as React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import './ElevatorPanel.css';
import { Card, withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pressFloor } from '../../actions/elevator';

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

class ElevatorPanel extends React.Component {
  props: any;

  render() {
    const { classes, pressFloor: pressFloorAction } = this.props;
    return <Card className={classes.card}>
      <h1>
        hello!
      </h1>
      <Button variant="fab" color="primary" aria-label="Add">
        <AddIcon/>
      </Button>
      <div className='btns-group'>
      {
        Array.from(new Array(5).keys()).reverse().map((floor) => (

        <Button variant="fab"
                color="primary"
                className={(floor) === this.props.floor ? classes.buttonGlow : ''}
                onClick={() => pressFloorAction(floor)}
                key={floor}>
          {floor}
        </Button>
        ))
      }
      </div>
    </Card>;
  }
}

const mapStateToProps = state => ({
  floor: state.elevator.floor
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ pressFloor }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ElevatorPanel));
