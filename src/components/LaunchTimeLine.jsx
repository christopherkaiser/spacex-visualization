import React from 'react';
import PropTypes from 'prop-types';

const LaunchTimeLine = ({ Chart }) => (
  <div>
    <h2>Launch Time Line</h2>
    <Chart />
  </div>
);

LaunchTimeLine.propTypes = {
  Chart: PropTypes.func.isRequired,
};

export default LaunchTimeLine;
