import React from 'react';
import { Pie } from 'react-chartjs-2';

/**
 * 투표 결과를 원형 차트 형태로 표시하는 컴포넌트
 */
const ResultChart: React.FC = () => {
  // 차트에 사용할 데이터 설정
  const data = {
    labels: ['Option 1', 'Option 2'], // 차트의 레이블
    datasets: [
      {
        label: 'Votes', // 데이터셋의 레이블
        data: [60, 40], // 각 옵션에 대한 투표 수
        backgroundColor: ['#FF6384', '#36A2EB'], // 각 데이터 포인트에 대한 배경색
      },
    ],
  };

  return <Pie data={data} />; // Pie 컴포넌트를 사용하여 차트를 렌더링
};

export default ResultChart;