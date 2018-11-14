import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { PropTypes } from 'prop-types';

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { updateSelection } = this.props;
    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem
            onClick={() => {
              this.handleClose();
              updateSelection('success');
            }}
          >
            Success
          </MenuItem>
          <MenuItem
            onClick={() => {
              this.handleClose();
              updateSelection('rocket');
            }}
          >
            Rocket
          </MenuItem>
          <MenuItem
            onClick={() => {
              this.handleClose();
              updateSelection('launch_site');
            }}
          >
            Launch Site
          </MenuItem>
          <MenuItem
            onClick={() => {
              this.handleClose();
              updateSelection('cores_land_success');
            }}
          >
            Successful Core Landings
          </MenuItem>
          <MenuItem
            onClick={() => {
              this.handleClose();
              updateSelection('cores_land_type');
            }}
          >
            Cores Land Type
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

SimpleMenu.propTypes = {
  updateSelection: PropTypes.func.isRequired,
};

export default SimpleMenu;
