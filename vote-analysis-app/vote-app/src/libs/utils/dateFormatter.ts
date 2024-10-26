// src/libs/utils/dataFormatter.ts

// 투표 결과 데이터를 차트 형식으로 변환하는 함수
// @param results - 투표 결과 데이터 객체, 각 옵션 이름을 키로 하고, 해당 옵션의 투표 수를 값으로 가짐
// @returns 차트에 사용될 데이터 객체
export const formatResultsForChart = (results: Record<string, number>) => {
  // 결과 객체의 키를 사용하여 레이블 배열 생성
  const labels = Object.keys(results);
  
  // 결과 객체의 값을 사용하여 데이터 배열 생성
  const data = Object.values(results);

  // 차트에 필요한 데이터 형식을 반환
  return {
    labels,
    datasets: [
      {
        label: 'Votes', // 데이터셋의 레이블
        data, // 투표 수 데이터
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // 데이터셋의 배경 색상 배열
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // 데이터셋의 호버 색상 배열
      },
    ],
  };
};