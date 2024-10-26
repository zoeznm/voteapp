import React from 'react';
import { Pie } from 'react-chartjs-2';

const ResultChart = () => {
  const data = {
    labels: ['Option 1', 'Option 2'],
    datasets: [
      {
        label: 'Votes',
        data: [60, 40], 
        backgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  return <Pie data={data} />;
};

export default ResultChart;
