import React from 'react';
import ResultChart from '../components/ResultChart'; // 결과 차트 컴포넌트를 가져옵니다.

const Results: React.FC = () => {
  return (
    <div>
      <h2>투표 결과</h2> {/* 투표 결과 제목 */}
      <ResultChart /> {/* 결과 차트를 렌더링합니다. */}
    </div>
  );
};

export default Results; // Results 컴포넌트를 내보냅니다.