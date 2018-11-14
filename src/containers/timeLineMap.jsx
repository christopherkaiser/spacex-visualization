import React from 'react';
import { getAllLaunches, getAllCores } from '../reducers/launches';
import BarChart from './BarChart';

const barChart = props => () => (
  <BarChart {...props} />
);

const map = {
  success: {
    chart: barChart,
    sourceFn: state => getAllLaunches(state.launches),
    data: [
      {
        label: 'Success',
        color: 'blue',
        predicate: launch => launch.launch_success === true,
      },
      {
        label: 'Failed',
        color: 'red',
        predicate: launch => launch.launch_success === false,
      },
      {
        label: 'Not Launched',
        color: 'gray',
        predicate: launch => launch.launch_success !== true && launch.launch_success !== false,
      },
    ],
  },
  rocket: {
    chart: barChart,
    sourceFn: state => getAllLaunches(state.launches),
    data: [
      {
        label: 'falcon1',
        color: 'gray',
        predicate: launch => launch.rocket.rocket_id === 'falcon1',
      },
      {
        label: 'falcon9',
        color: 'blue',
        predicate: launch => launch.rocket.rocket_id === 'falcon9',
      },
      {
        label: 'falcon heavy',
        color: 'brown',
        predicate: launch => launch.rocket.rocket_id === 'falconheavy',
      },
      {
        label: 'bfr',
        color: 'green',
        predicate: launch => launch.rocket.rocket_id === 'bfr',
      },
    ],
  },
  launch_site: {
    chart: barChart,
    sourceFn: state => getAllLaunches(state.launches),
    data: [
      {
        label: 'Omelek Island',
        color: 'gray',
        predicate: launch => launch.launch_site.site_id === 'kwajalein_atoll',
      },
      {
        label: 'Cape Canaveral Air Force Station',
        color: 'blue',
        predicate: launch => launch.launch_site.site_id === 'ccafs_slc_40',
      },
      {
        label: 'Kennedy Space Center',
        color: 'brown',
        predicate: launch => launch.launch_site.site_id === 'ksc_lc_39a',
      },
      {
        label: 'Vandenberg Air Force Base',
        color: 'yellow',
        predicate: launch => launch.launch_site.site_id === 'vafb_slc_4e',
      },
      {
        label: 'Boca Chica Village',
        color: 'red',
        predicate: launch => launch.launch_site.site_id === 'stls',
      },
    ],
  },
  cores_land_success: {
    chart: barChart,
    sourceFn: state => getAllCores(state.launches),
    data: [
      {
        label: 'Core Successful Landing',
        color: 'green',
        predicate: core => core.land_success === true,
      },
      {
        label: 'Core Failed Landing',
        color: 'red',
        predicate: core => core.land_success === false,
      },
      {
        label: 'Landing Attempt Prevented ',
        color: 'yellow',
        predicate: core => core.land_success === null && core.landing_intent === true,
      },
      {
        label: 'Landing Not Attempted',
        color: 'gray',
        predicate: core => !core.landing_intent,
      },
    ],
  },
  cores_land_type: {
    chart: barChart,
    sourceFn: state => getAllCores(state.launches),
    data: [
      {
        label: 'Drone Ship',
        color: 'red',
        predicate: core => core.landing_type === 'ASDS',
      },
      {
        label: 'Return to Landing Site',
        color: 'green',
        predicate: core => core.landing_type === 'RTLS',
      },
      {
        label: 'Ocean',
        color: 'blue',
        predicate: core => core.landing_type === 'Ocean',
      },
      {
        label: 'Landing Not Attempted',
        color: 'gray',
        predicate: core => !core.landing_type,
      },
    ],
  },
};

// launch.rocket.rocket_id, launch.launch_site.site_id
// todo take color out and have colorsets that include the other params like transparancy
// red: backgroundColor: rgb(red), borderColor: rgb(transparentRed)),

export default map;
