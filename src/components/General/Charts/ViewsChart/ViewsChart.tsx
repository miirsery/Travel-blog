import React from 'react';
import { Doughnut, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import styles from './index.module.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

const ViewsChart = () => {
  const data = {
    maintainAspectRatio: false,
    responsive: false,
    labels: ['Просмотров', 'Ничего'],
    datasets: [
      {
        data: [400, 100],
        backgroundColor: '#f90',
        hoverBackgroundColor: '#f10',
      },
    ],
  };
  const options = {
    legend: {
      display: false,
      position: 'right',
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  };

  return (
    <div className={styles.doughnut}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default ViewsChart;
