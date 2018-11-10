import { connect } from 'react-redux';
import _ from 'lodash';
import LaunchTimeLine from '../components/LaunchTimeLine';
import { getAllLaunches } from '../reducers/launches';
import map from './timeLineMap';

const mapStateToProps = (state) => {
  const launches = getAllLaunches(state.launches);
  const labels = _.uniq(launches.map(l => l.launch_year));
  const byLabel = launches.reduce(
    (acc, current) => ({
      ...acc,
      [current.launch_year]: [...(acc[current.launch_year] || []), current],
    }),
    {},
  );

  const redu = pred => (acc, current) => (pred(current) ? acc + 1 : acc);
  const dataSet = pred => labels.map(l => byLabel[l].reduce(redu(pred), 0));

  const dataSets = map[state.selection].map(arg => ({
    label: arg.label,
    color: arg.color,
    data: dataSet(arg.predicate),
  }));

  return { labels, dataSets };
};

export default connect(
  mapStateToProps,
  {},
)(LaunchTimeLine);

// timescale year/month
// bar spliting

// bar spliting characteristics
// launch success
// rocked id
// launch location
// land success
// payload_id
