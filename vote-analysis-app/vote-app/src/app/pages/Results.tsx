// Results.tsx

import React, { useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
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

const VoteAgainButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Results: React.FC = () => {
  const { results, fetchResults, resetResults, voteAgain } = useVote();
  const navigate = useNavigate();

  useEffect(() => {
    fetchResults();
  }, [fetchResults]);

  const handleReset = () => {
    resetResults();
    fetchResults();
  };

  // 투표 다시하기 버튼 클릭 시 동작
  const handleVoteAgain = () => {
    voteAgain();
    navigate('/vote'); // 다시 투표 페이지로 이동
  };

  return (
    <Container>
      <Title>투표 결과</Title>
      <ResetButton onClick={handleReset}>결과 초기화</ResetButton>
      <ResultChart results={results} />
      <VoteAgainButton onClick={handleVoteAgain}>투표 다시 하기</VoteAgainButton>
    </Container>
  );
};

export default Results;