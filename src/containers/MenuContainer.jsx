import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Menu from '../components/Menu';
import { updateSelection } from '../actions';

const MenuContainer = ({ updateSelection: update }) => (
  <Menu
    updateSelection={value => update(value)}
  />
);

MenuContainer.propTypes = {
  updateSelection: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  selection: state.selection,
});

export default connect(
  mapStateToProps,
  { updateSelection },
)(MenuContainer);
