import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ResultChart from '../components/ResultChart';
import { useVote } from '../hooks/useVote';
import styled from 'styled-components'; // Styled Components를 임포트합니다.

// 스타일을 정의합니다.
const Container = styled.div`
  text-align: center; /* 텍스트 중앙 정렬 */
  margin-top: 50px; /* 위쪽 여백 */
`;

const Title = styled.h2`
  font-size: 2rem; /* 제목 크기 */
  color: #333; /* 제목 색상 */
  margin-bottom: 20px; /* 아래쪽 여백 */
`;

const ResetButton = styled.button`
  padding: 10px 20px; /* 패딩 */
  background-color: #dc3545; /* 배경 색상 */
  color: white; /* 텍스트 색상 */
  border: none; /* 테두리 제거 */
  border-radius: 5px; /* 모서리 둥글게 */
  cursor: pointer; /* 커서 모양 변경 */
  margin-bottom: 20px; /* 아래쪽 여백 */
  transition: background-color 0.3s; /* 배경 색상 변화에 애니메이션 추가 */

  &:hover {
    background-color: #c82333; /* 호버 시 배경 색상 변화 */
  }
`;

const ResetLink = styled(Link)`
  display: inline-block; /* 링크를 블록으로 설정 */
  text-decoration: none; /* 밑줄 제거 */
`;

const VoteButton = styled.button`
  padding: 10px 20px; /* 패딩 */
  background-color: #007bff; /* 배경 색상 */
  color: white; /* 텍스트 색상 */
  border: none; /* 테두리 제거 */
  border-radius: 5px; /* 모서리 둥글게 */
  cursor: pointer; /* 커서 모양 변경 */
  transition: background-color 0.3s; /* 배경 색상 변화에 애니메이션 추가 */

  &:hover {
    background-color: #0056b3; /* 호버 시 배경 색상 변화 */
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
      <ResultChart results={results} /> {/* results를 ResultChart에 전달 */}
      <ResetLink to="/vote"> {/* 투표 다시 하기 버튼 추가 */}
        <VoteButton>투표 다시 하기</VoteButton> {/* 스타일이 적용된 VoteButton 사용 */}
      </ResetLink>
    </Container>
  );
};

export default Results;