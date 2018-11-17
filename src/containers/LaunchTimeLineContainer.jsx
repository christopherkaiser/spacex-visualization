import { connect } from 'react-redux';
import _ from 'lodash';
import React from 'react';
import map from './timeLineMap';

export const barGraphToProps = (selection, data) => {
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

  const labels = labelsFn(data);
  const dataSets = selection.data(data).map(arg => ({
    label: arg.label,
    color: arg.color,
    data: dataSet(arg.predicate, data),
  }));

  const Chart = selection.chart({ labels, dataSets });

  return { Chart };
};

// date time instead of year
// draw average line

export const scatterPlotToProps = (selection, data) => {
  const dataSets = selection.data(data).map(arg => ({
    label: arg.label,
    color: arg.color,
    data: data
      .filter(payload => arg.predicate(payload))
      .map(payload => ({ x: selection.xFunc(payload), y: selection.yFunc(payload) })),
  }));
  const Chart = selection.chart({ dataSets });
  return { Chart };
};

const mapStateToProps = state => map[state.selection].stateToProps(state);


export default connect(
  mapStateToProps,
  {},
)(({ Chart }) => (
  <Chart />
));

// timescale year/month
// bar spliting

// rocket id
// launch success
// launch location

// multiple cores
// multiple payloads
// land success
// payload_id

// payload customers

// month vs launch site

// bar graphs x axis nation y axis amount of payloads 