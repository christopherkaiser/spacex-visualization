import { connect } from 'react-redux';
import _ from 'lodash';
import LaunchTimeLine from '../components/LaunchTimeLine';
import map from './timeLineMap';

const mapStateToProps = (state) => {
  const labelsFn = set => _.uniq(set.map(l => l.launch_year));
  const byLabel = set => set.reduce(
    (acc, current) => ({
      ...acc,
      [current.launch_year]: [...(acc[current.launch_year] || []), current],
    }),
    {},
  );
  const redu = pred => (acc, current) => (pred(current) ? acc + 1 : acc);
  const dataSet = (pred, set) => labelsFn(set).map(l => byLabel(set)[l].reduce(redu(pred), 0));

  const data = map[state.selection].sourceFn(state);
  const labels = labelsFn(data);
  const dataSets = map[state.selection].data.map(arg => ({
    label: arg.label,
    color: arg.color,
    data: dataSet(arg.predicate, data),
  }));

  const Chart = map[state.selection].chart({ labels, dataSets });

  return { Chart };
};

export default connect(
  mapStateToProps,
  {},
)(LaunchTimeLine);

// timescale year/month
// bar spliting

// rocket id
// launch success
// launch location

// multiple cores
// multiple payloads
// land success
// payload_id
