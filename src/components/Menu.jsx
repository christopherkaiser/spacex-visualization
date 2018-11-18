import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { PropTypes } from 'prop-types';
import timeLineMap from '../containers/timeLineMap';

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
          <h3>Open Menu</h3>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {
            Object.keys(timeLineMap).map(key => (
              <MenuItem
                key={key}
                onClick={() => {
                  this.handleClose();
                  updateSelection(key);
                }}
              >
                {timeLineMap[key].label}
              </MenuItem>
            ))
          }
        </Menu>
      </div>
    );
  }
}

SimpleMenu.propTypes = {
  updateSelection: PropTypes.func.isRequired,
};

export default SimpleMenu;



{/* <MenuItem
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
<MenuItem
onClick={() => {
  this.handleClose();
  updateSelection('payload_nationality');
}}
>
Payload Nationality
</MenuItem>
<MenuItem
onClick={() => {
  this.handleClose();
  updateSelection('payload_nationality_time');
}}
>
Payload Nationality Time
</MenuItem>
<MenuItem
onClick={() => {
  this.handleClose();
  updateSelection('payload_weight_vs_year');
}}
>
Payload Weight vs Year
</MenuItem> */}