import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Link 컴포넌트 가져오기
import ResultChart from '../components/ResultChart';
import { useVote } from '../hooks/useVote'; // useVote 훅 가져오기

const Results: React.FC = () => {
  const { results, fetchResults, resetResults } = useVote(); // 결과와 fetchResults 함수 가져오기

  useEffect(() => {
    fetchResults(); // 컴포넌트가 마운트될 때 결과 가져오기
  }, [fetchResults]); // fetchResults를 의존성 배열에 추가

  const handleReset = () => {
    resetResults();
    fetchResults(); // 결과 초기화 호출
  };

  return (
    <div>
      <h2>투표 결과</h2>
      <button onClick={handleReset}>결과 초기화</button>
      <ResultChart results={results} /> {/* results를 ResultChart에 전달 */}
      <Link to="/vote"> {/* 투표 다시 하기 버튼 추가 */}
        <button>투표 다시 하기</button>
      </Link>
    </div>
  );
};

export default Results;