import React from 'react';
import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const rgba = (color, alpha) => `rgba(${color.r},${color.g},${color.b},${alpha})`;

const dataSetProps = ({ label, data, color }) => ({
  label,
  backgroundColor: rgba(color, 0.4),
  borderColor: rgba(color, 1),
  borderWidth: 1,
  hoverBackgroundColor: rgba(color, 0.8),
  hoverBorderColor: rgba(color, 1),
  data,
});

const chartData = dataSets => dataSets.map(dataSet => dataSetProps(dataSet));

const BarChart = ({ labels, dataSets }) => (
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
);

BarChart.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  dataSets: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      color: PropTypes.shape({
        r: PropTypes.number.isRequired,
        g: PropTypes.number.isRequired,
        b: PropTypes.number.isRequired,
      }).isRequired,
      data: PropTypes.arrayOf(PropTypes.number).isRequired,
    }),
  ).isRequired,
};

export default BarChart;
