import { combineReducers } from 'redux';
import launches from './launches';
import * as types from '../constants/ActionTypes';

const selection = (state = 'success', action) => {
  switch (action.type) {
    case types.UPDATE_SELECTION:
      return action.selection;
    default:
      return state;
  }
};

export default combineReducers({
  selection,
  launches,
});
