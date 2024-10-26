import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'; // Styled Components를 임포트합니다.

// 스타일을 정의합니다.
const Container = styled.div`
  text-align: center; /* 텍스트 중앙 정렬 */
  margin-top: 50px; /* 위쪽 여백 */
`;

const Title = styled.h1`
  font-size: 2.5rem; /* 제목 크기 */
  color: #333; /* 제목 색상 */
`;

const StyledLink = styled(Link)`
  display: inline-block; /* 링크를 블록으로 설정 */
  margin-top: 20px; /* 위쪽 여백 */
  padding: 10px 20px; /* 패딩 */
  background-color: #007bff; /* 배경 색상 */
  color: white; /* 텍스트 색상 */
  border-radius: 5px; /* 모서리 둥글게 */
  text-decoration: none; /* 밑줄 제거 */
  transition: background-color 0.3s; /* 배경 색상 변화에 애니메이션 추가 */

  &:hover {
    background-color: #0056b3; /* 호버 시 배경 색상 변화 */
  }
`;

const Home: React.FC = () => {
  return (
    <Container>
      <Title>투표하러 오신 것을 환영합니다!</Title>
      <StyledLink to="/vote">투표하러 가기</StyledLink>
    </Container>
  );
};

export default Home;