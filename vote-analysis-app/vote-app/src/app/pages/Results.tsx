// Results.tsx

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ResultChart from '../components/ResultChart';
import { useVote } from '../hooks/useVote';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

const ResetButton = styled.button`
  padding: 10px 20px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c82333;
  }
`;

const ResetLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
`;

const VoteButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Results: React.FC = () => {
  const { results, fetchResults, resetResults } = useVote();

  useEffect(() => {
    fetchResults(); // 컴포넌트가 마운트될 때 결과 가져오기
  }, [fetchResults]);

  const handleReset = () => {
    resetResults();
    fetchResults(); // 결과 초기화 호출
  };

  return (
    <Container>
      <Title>투표 결과</Title>
      <ResetButton onClick={handleReset}>결과 초기화</ResetButton>
      <ResultChart results={results} /> {/* results를 props로 전달 */}
      <ResetLink to="/vote">
        <VoteButton>투표 다시 하기</VoteButton>
      </ResetLink>
    </Container>
  );
};

export default Results;