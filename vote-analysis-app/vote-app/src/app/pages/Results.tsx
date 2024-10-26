import React, { useEffect } from 'react';
import ResultChart from '../components/ResultChart';
import { useVote } from '../hooks/useVote'; // useVote 훅 가져오기

const Results: React.FC = () => {
  const { results, fetchResults } = useVote(); // 결과와 fetchResults 함수 가져오기

  useEffect(() => {
    fetchResults(); // 컴포넌트가 마운트될 때 결과 가져오기
  }, [fetchResults]); // fetchResults를 의존성 배열에 추가

  return (
    <div>
      <h2>투표 결과</h2>
      <ResultChart results={results} /> {/* results를 ResultChart에 전달 */}
    </div>
  );
};

export default Results;