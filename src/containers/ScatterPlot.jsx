import React from 'react';
import { Scatter } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const rgba = (color, alpha) => `rgba(${color.r},${color.g},${color.b},${alpha})`;

const dataSetProps = ({ label, data, color }) => ({
  label,
  fill: false,
  backgroundColor: rgba(color, 0.4),
  pointBorderColor: rgba(color, 1),
  pointBackgroundColor: '#fff',
  pointBorderWidth: 2,
  pointHoverRadius: 5,
  pointHoverBackgroundColor: rgba(color, 1),
  pointHoverBorderColor: 'rgba(220,220,220,1)',
  pointHoverBorderWidth: 2,
  pointRadius: 1,
  pointHitRadius: 10,
  data,
});

const chartData = dataSets => dataSets.map(dataSet => dataSetProps(dataSet));

const ScatterPlot = ({ dataSets }) => (
  <Scatter
    data={{
      labels: ['Scatter'],
      datasets: chartData(dataSets),
    }}
    options={{
      responsive: true,
      title: {
        display: true,
        text: 'Chart.js Time Point Data',
      },
      scales: {
        xAxes: [
          {
            type: 'time',
            display: true,
            time: {
              min: '2006-03-01T22:30:00.000Z',
              unit: 'year',
              // parser: timeFormat,
              // round: 'day'
              tooltipFormat: 'll HH:mm',
            },
            scaleLabel: {
              display: true,
              labelString: 'Date',
            },
            ticks: {
              major: {
                fontStyle: 'bold',
                fontColor: '#FF0000',
              },
            },
          },
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'value',
            },
          },
        ],
      },
    }}
  />
);

ScatterPlot.propTypes = {
  // labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  dataSets: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      color: PropTypes.shape({
        r: PropTypes.number.isRequired,
        g: PropTypes.number.isRequired,
        b: PropTypes.number.isRequired,
      }).isRequired,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          x: PropTypes.number.isRequired,
          y: PropTypes.number.isRequired,
        }),
      ).isRequired,
    }),
  ).isRequired,
};

export default ScatterPlot;
