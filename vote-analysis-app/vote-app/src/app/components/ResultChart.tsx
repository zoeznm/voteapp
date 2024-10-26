import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// 필요한 요소를 Chart.js에 등록합니다.
ChartJS.register(ArcElement, Tooltip, Legend);

const ResultChart: React.FC<{ results: Record<string, number> }> = ({ results }) => {
  // 차트 데이터 설정
  const data = {
    labels: Object.keys(results), // 차트의 레이블
    datasets: [
      {
        label: 'Votes',
        data: Object.values(results), // 각 옵션에 대한 투표 수
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // 각 데이터 포인트에 대한 배경색
      },
    ],
  };

  return <Pie data={data} />; // Pie 컴포넌트를 사용하여 차트를 렌더링
};

export default ResultChart;