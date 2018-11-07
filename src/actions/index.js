import spacex from '../api/spacex';
import * as types from '../constants/ActionTypes';

const receiveLaunches = launches => ({
  type: types.RECEIVE_LAUNCHES,
  launches,
});

export const getLaunches = () => (dispatch) => {
  spacex.getLaunches((launches) => {
    dispatch(receiveLaunches(launches));
  });
};

export const temp = () => {};
