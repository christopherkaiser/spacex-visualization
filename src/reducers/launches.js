import _ from 'lodash';
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
export const getAllCores = state => _.flatten(getAllLaunches(state)
  .map(launch => [...launch.rocket.first_stage.cores
    .map(core => ({ ...core, launch_year: launch.launch_year }))]));

export const getAllPayloads = state => _.flatten(getAllLaunches(state)
  .map(launch => [...launch.rocket.second_stage.payloads
    .map(payload => ({ ...payload, launch_year: launch.launch_year }))]));

// export const getAllCores = state => _.flatten(state.allIds
//  .map(id => [...getLaunch(state, id).rocket.cores]));
