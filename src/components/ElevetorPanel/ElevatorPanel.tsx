import * as React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import './ElevatorPanel.css';
import { Card, withStyles } from '@material-ui/core';

const styles = {
  card: {
    width: 345,
    height: 700

  },
  media: {
    height: 140
  }
};

class ElevatorPanel extends React.Component {
  props: any;

  render() {
    const { classes } = this.props;
    return <Card className={classes.card}>
      <h1>
        hello!
      </h1>
      <Button variant="fab" color="primary" aria-label="Add">
        <AddIcon/>
      </Button>
      <div className='btns-group'>
      {
        new Array(4).fill(null).map((value, index) => (

        <Button variant="fab" color="primary" aria-label="Add">
          {index + 1}
        </Button>
        ))
      }
      </div>
      {/*<CardActionArea>*/}
      {/*<CardMedia*/}
      {/*className={classes.media}*/}
      {/*image="/static/images/cards/contemplative-reptile.jpg"*/}
      {/*title="Contemplative Reptile"*/}
      {/*/>*/}
      {/*<CardContent>*/}
      {/*<Typography gutterBottom variant="h5" component="h2">*/}
      {/*Lizard*/}
      {/*</Typography>*/}
      {/*<Typography component="p">*/}
      {/*Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging*/}
      {/*across all continents except Antarctica*/}
      {/*</Typography>*/}
      {/*</CardContent>*/}
      {/*</CardActionArea>*/}
      {/*<CardActions>*/}
      {/*<Button size="small" color="primary">*/}
      {/*Share*/}
      {/*</Button>*/}
      {/*<Button size="small" color="primary">*/}
      {/*Learn More*/}
      {/*</Button>*/}
      {/*</CardActions>*/}
    </Card>;

    //   <div className={'panel'}>
    //
    // </div>;
  }
}

export default withStyles(styles)(ElevatorPanel);
