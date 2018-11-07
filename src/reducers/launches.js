import { combineReducers } from 'redux';
import { RECEIVE_LAUNCHES } from '../constants/ActionTypes';

const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_LAUNCHES:
      return {
        ...state,
        ...action.launches.reduce(
          (obj, launch) => ({
            ...obj,
            [launch.flight_number]: launch,
          }),
          {},
        ),
      };
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_LAUNCHES:
      return action.launches.map(launch => launch.flight_number);
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  allIds,
});

export const getLaunch = (state, id) => state.byId[id];

export const getAllLaunches = state => state.allIds.map(id => getLaunch(state, id));
