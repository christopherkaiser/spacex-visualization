import { connect } from 'react-redux';
import _ from 'lodash';
import LaunchTimeLine from '../components/LaunchTimeLine';
import { getAllLaunches } from '../reducers/launches';

const mapStateToProps = (state) => {
  const launches = getAllLaunches(state.launches);
  const labels = _.uniq(launches.map(l => l.launch_year));
  const total = labels.map(label => launches.reduce(
    (acc, current) => acc + (current.launch_year === label ? 1 : 0),
    0,
  ));

  const success = labels.map(label => launches.reduce(
    (acc, current) =>
      acc + (current.launch_year === label && current.launch_success ? 1 : 0),
    0,
  ));

  const failed = labels.map(label =>
    launches.reduce(
      (acc, current) =>
        acc +
        (current.launch_year === label && current.launch_success === false
          ? 1
          : 0),
      0,
    ),
  );

  const dataSets = { total, success, failed };

  return { labels, dataSets };
};

export default connect(
  mapStateToProps,
  {},
)(LaunchTimeLine);
