import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import styled from 'styled-components'; // Styled Components를 임포트합니다.

// 필요한 요소를 Chart.js에 등록합니다.
ChartJS.register(ArcElement, Tooltip, Legend);

// 차트를 감싸는 컨테이너 스타일 정의
const ChartContainer = styled.div`
  max-width: 600px; /* 최대 너비 설정 */
  margin: 0 auto; /* 중앙 정렬 */
  padding: 20px; /* 패딩 추가 */
`;

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

  return (
    <ChartContainer>
      <Pie data={data} options={{ responsive: true, maintainAspectRatio: false }} /> {/* Pie 컴포넌트를 사용하여 차트를 렌더링 */}
    </ChartContainer>
  );
};

export default ResultChart;