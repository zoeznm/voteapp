import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend); // 필요한 스케일 및 요소 등록

const Result: React.FC = () => {
  const voteData = JSON.parse(localStorage.getItem('voteData') || '{}');

  const data = {
    labels: Object.keys(voteData.votes),
    datasets: [
      {
        label: '투표 결과',
        data: Object.values(voteData.votes),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div>
      <h1>{voteData.topic}</h1>
      <Bar data={data} />
    </div>
  );
};

export default Result;