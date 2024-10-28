import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import styled from 'styled-components';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const ChartContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  max-height: 600px;
`;

interface ChartProps {
  type: 'bar' | 'pie'; // 차트 타입
  data: Record<string, number>;
  title: string;
}

const Chart: React.FC<ChartProps> = ({ type, data, title }) => {
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: title,
        data: Object.values(data),
        backgroundColor: type === 'bar' ? 'rgba(75, 192, 192, 0.6)' : ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <ChartContainer>
      <h2>{title}</h2>
      {type === 'bar' ? (
        <Bar data={chartData} options={options} />
      ) : (
        <Pie data={chartData} options={options} />
      )}
    </ChartContainer>
  );
};

export default Chart;