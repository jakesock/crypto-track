import { ChartOptions } from 'chart.js';

export const chartOptions: ChartOptions = {
  animation: {
    duration: 1500,
  },
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    xAxes: [
      {
        type: 'time',
        distribution: 'linear',
      },
    ],
  },
};
