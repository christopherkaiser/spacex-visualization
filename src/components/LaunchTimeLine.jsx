import React from 'react';
import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const dataSetProps = ({ label, data, color }) => ({
  label,
  backgroundColor: color,
  borderColor: color,
  borderWidth: 1,
  hoverBackgroundColor: color,
  hoverBorderColor: color,
  data,
});

const chartData = dataSets => dataSets.map(dataSet => dataSetProps(dataSet));

const LaunchTimeLine = ({ labels, dataSets }) => (
  <div>
    <h2>Launch Time Line</h2>
    <Bar
      data={{
        labels,
        datasets: chartData(dataSets),
      }}
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
  dataSets: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      data: PropTypes.arrayOf(PropTypes.number).isRequired,
    }),
  ).isRequired,
};

export default LaunchTimeLine;
