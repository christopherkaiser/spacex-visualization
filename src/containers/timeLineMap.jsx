import React from 'react';
import _ from 'lodash';
import { getAllLaunches, getAllCores, getAllPayloads } from '../reducers/launches';
import BarChart from './BarChart';
import * as colors from '../constants/Colors';
import ScatterPlot from './ScatterPlot';
import { barGraphToProps, scatterPlotToProps } from './LaunchTimeLineContainer';

const barChart = props => () => (
  <BarChart {...props} />
);

const scatterPlot = props => () => (
  <ScatterPlot {...props} />
);

const generateData = (set, field) => {
  const uniqueFields = _.uniq(set.map(field)).filter(f => f);
  let iter = 0;
  return uniqueFields.map((f) => {
    const returnObj = {
      label: f || 'Null',
      color: colors.colorSet1[iter % 13],
      predicate: value => field(value) === f,
    };
    iter += 1;
    return returnObj;
  });
};

const map = {
  success: {
    chart: barChart,
    stateToProps: state => barGraphToProps(map[state.selection], getAllLaunches(state.launches)),
    data: () => [
      {
        label: 'Success',
        color: colors.lime,
        predicate: launch => launch.launch_success === true,
      },
      {
        label: 'Failed',
        color: colors.red,
        predicate: launch => launch.launch_success === false,
      },
      {
        label: 'Not Launched',
        color: colors.silver,
        predicate: launch => launch.launch_success === null,
      },
    ],
  },
  rocket: {
    chart: barChart,
    stateToProps: state => barGraphToProps(map[state.selection], getAllLaunches(state.launches)),
    data: () => [
      {
        label: 'falcon1',
        color: colors.maroon,
        predicate: launch => launch.rocket.rocket_id === 'falcon1',
      },
      {
        label: 'falcon9',
        color: colors.navy,
        predicate: launch => launch.rocket.rocket_id === 'falcon9',
      },
      {
        label: 'falcon heavy',
        color: colors.purple,
        predicate: launch => launch.rocket.rocket_id === 'falconheavy',
      },
      {
        label: 'bfr',
        color: colors.lime,
        predicate: launch => launch.rocket.rocket_id === 'bfr',
      },
    ],
  },
  launch_site: {
    chart: barChart,
    stateToProps: state => barGraphToProps(map[state.selection], getAllLaunches(state.launches)),
    data: () => [
      {
        label: 'Omelek Island',
        color: colors.green,
        predicate: launch => launch.launch_site.site_id === 'kwajalein_atoll',
      },
      {
        label: 'Cape Canaveral Air Force Station',
        color: colors.blue,
        predicate: launch => launch.launch_site.site_id === 'ccafs_slc_40',
      },
      {
        label: 'Kennedy Space Center',
        color: colors.maroon,
        predicate: launch => launch.launch_site.site_id === 'ksc_lc_39a',
      },
      {
        label: 'Vandenberg Air Force Base',
        color: colors.teal,
        predicate: launch => launch.launch_site.site_id === 'vafb_slc_4e',
      },
      {
        label: 'Boca Chica Village',
        color: colors.lime,
        predicate: launch => launch.launch_site.site_id === 'stls',
      },
    ],
  },
  cores_land_success: {
    chart: barChart,
    stateToProps: state => barGraphToProps(map[state.selection], getAllCores(state.launches)),
    data: () => [
      {
        label: 'Core Successful Landing',
        color: colors.lime,
        predicate: core => core.land_success === true,
      },
      {
        label: 'Core Failed Landing',
        color: colors.red,
        predicate: core => core.land_success === false,
      },
      {
        label: 'Landing Attempt Prevented ',
        color: colors.maroon,
        predicate: core => core.land_success === null && core.landing_intent === true,
      },
      {
        label: 'Landing Not Attempted',
        color: colors.silver,
        predicate: core => !core.landing_intent,
      },
    ],
  },
  cores_land_type: {
    chart: barChart,
    stateToProps: state => barGraphToProps(map[state.selection], getAllCores(state.launches)),
    data: () => [
      {
        label: 'Drone Ship',
        color: colors.maroon,
        predicate: core => core.landing_type === 'ASDS',
      },
      {
        label: 'Return to Landing Site',
        color: colors.green,
        predicate: core => core.landing_type === 'RTLS',
      },
      {
        label: 'Ocean',
        color: colors.blue,
        predicate: core => core.landing_type === 'Ocean',
      },
      {
        label: 'Landing Not Attempted',
        color: colors.silver,
        predicate: core => !core.landing_type,
      },
    ],
  },
  payload_types: {
    chart: barChart,
    stateToProps: state => barGraphToProps(map[state.selection], getAllPayloads(state.launches)),
    data: payloads => generateData(payloads, payload => payload.nationality),
  },
  payload_weight_vs_year: {
    chart: scatterPlot,
    stateToProps: state => scatterPlotToProps(map[state.selection], getAllPayloads(state.launches)),
    xFunc: payload => payload.launch_date_utc,
    yFunc: payload => payload.payload_mass_kg,
    data: payloads => generateData(payloads.filter(p => p.launch_date_utc), payload => payload.payload_type),
  },
};

// launch.rocket.rocket_id, launch.launch_site.site_id
// todo take color out and have colorsets that include the other params like transparancy
// red: backgroundColor: rgb(red), borderColor: rgb(transparentRed)),

// {
//   label: 'Weight',
//   color: colors.maroon,
//   predicate: payload => payload.payload_mass_kg && payload.payload_type === 'Satellite',
// },

export default map;
