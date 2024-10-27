// Result.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';
import styled from 'styled-components';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const ChartContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  max-height : 600px;
`;

const Result: React.FC = () => {
  const storedTopics = JSON.parse(localStorage.getItem('topics') || '[]');
  const voteData = storedTopics.length > 0 ? storedTopics[storedTopics.length - 1] : null;

  if (!voteData) {
    return <p>투표 결과가 없습니다.</p>;
  }

  const barData = {
    labels: Object.keys(voteData.votes),
    datasets: [
      {
        label: '투표 결과 (막대 그래프)',
        data: Object.values(voteData.votes),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };


  return (
    <div>
      <h1>투표 결과</h1>
      <ChartContainer>
      <h2>{voteData.topic}</h2>
        <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
      </ChartContainer>
    </div>
  );
};

export default Result;