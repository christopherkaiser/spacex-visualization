
// const mapStateToProps = (state) => {
//   const launches = getAllLaunches(state.launches);
//   const labels = _.uniq(launches.map(l => l.launch_year));

//   const reducer = (acc, current) => ({
//     ...acc,
//     [current.launch_year]: {
//       total: acc[current.launch_year] + 1 || 1,
//       success: current.launch_success
//         ? acc[current.launch_year].success + 1 || 1
//         : acc[current.launch_year].success,
//       failed: !current.launch_success
//         ? acc[current.launch_year].success + 1 || 1
//         : acc[current.launch_year].success,
//     },
//   });

//   const data = launches.reduce(reducer, {});
//   const data2 = labels.map(l => ({
//     total: data[l].total,
//     success: data[l].success,
//     failed: data[l].failed,
//   }));
//   const dataSets = {
//     total: data2.map(d => d.total),
//     success: data2.map(d => d.success),
//     failed: data2.map(d => d.failed),
//   };

//   return { labels, dataSets };
// };

// const total = labels.map(label => launches.reduce(
//     (acc, current) => acc + (current.launch_year === label ? 1 : 0),
//     0,
//   ));

//   const success = labels.map(label => launches.reduce(
//     (acc, current) => acc + (current.launch_year === label && current.launch_success ? 1 : 0),
//     0,
//   ));

//   const failed = labels.map(label => launches.reduce(
//     (acc, current) => acc + (current.launch_year === label && current.launch_success === false
//       ? 1
//       : 0),
//     0,
//   ));