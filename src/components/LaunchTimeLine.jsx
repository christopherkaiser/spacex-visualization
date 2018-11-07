import React from 'react';
import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const dataSetProps = (label, data, color) => ({
  label,
  backgroundColor: color,
  borderColor: color,
  borderWidth: 1,
  hoverBackgroundColor: color,
  hoverBorderColor: color,
  data,
});

const chartData = (
  labels,
  totalLaunches,
  successLaunches,
  failedLaunches,
) => ({
  labels,
  datasets: [
    dataSetProps('Failed Launches', failedLaunches, 'red'),
    dataSetProps('Success Launches', successLaunches, 'rgba(75,192,192,1)'),
  ],
});

const LaunchTimeLine = ({ labels, dataSets }) => (
  <div>
    <h2>Launch Time Line</h2>
    <Bar
      data={chartData(
        labels,
        dataSets.total,
        dataSets.success,
        dataSets.failed,
      )}
      options={{
        scales: {
          xAxes: [
            {
              stacked: true,
            },
          ],
          yAxes: [
            {
              stacked: true,
            },
          ],
        },
      }}
    />
  </div>
);

LaunchTimeLine.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  dataSets: PropTypes.shape({
    total: PropTypes.arrayOf(PropTypes.number).isRequired,
    success: PropTypes.arrayOf(PropTypes.number).isRequired,
    failed: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
};

export default LaunchTimeLine;
