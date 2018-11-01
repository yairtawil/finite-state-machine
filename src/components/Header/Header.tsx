import * as React from 'react';
import { AppBar, Icon, IconButton, Toolbar, Tooltip, Typography } from '@material-ui/core';
import { Home } from '@material-ui/icons';

class Header extends React.Component {
  props: any;
  state = { open: false };
  target1;

  render() {
    // const open = Boolean(this.state.open);

    return <AppBar color="primary" position={'relative'}>
      <Toolbar className="root">
        <Tooltip title="Back to home">
          <IconButton id="home" className="menuButton" color="inherit" aria-label="Menu">
            <Home/>
          </IconButton>
        </Tooltip>

        <Typography variant="title" color="inherit" className="flex">
          Home
        </Typography>

        <div>
          <div ref={node => {
            this.target1 = node;
          }}>
            <Tooltip title="Menu">
              <IconButton color="inherit"
                          aria-label="Logout"
                          aria-owns="menu-user"
                          onClick={() => this.setState({ open: true })}>
                <Icon className="fa fa-user"/>
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </Toolbar>
    </AppBar>;
  }
}

export default Header;
