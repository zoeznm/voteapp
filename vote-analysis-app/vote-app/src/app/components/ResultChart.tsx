import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import styled from 'styled-components';

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const ResultChart: React.FC<{ results: Record<string, number> }> = ({ results }) => {
  const data = {
    labels: Object.keys(results),
    datasets: [
      {
        label: 'Votes',
        data: Object.values(results),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <ChartContainer>
      {Object.keys(results).length > 0 ? (
        <Pie data={data} options={{ responsive: true, maintainAspectRatio: false }} />
      ) : (
        <p>투표 결과가 없습니다.</p>
      )}
    </ChartContainer>
  );
};

export default ResultChart;