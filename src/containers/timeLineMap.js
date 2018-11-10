const map = {
  success: [
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
  rocket: [
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
      label: 'falconheavy',
      color: 'brown',
      predicate: launch => launch.rocket.rocket_id === 'falconheavy',
    },
    {
      label: 'bfr',
      color: 'green',
      predicate: launch => launch.rocket.rocket_id === 'bfr',
    },
  ],
};

// todo take color out and have colorsets that include the other params like transparancy
// red: backgroundColor: rgb(red), borderColor: rgb(transparentRed)),

export default map;
