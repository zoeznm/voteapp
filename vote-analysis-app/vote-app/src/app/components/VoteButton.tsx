import React from 'react';
import styled from 'styled-components'; // Styled Components를 임포트합니다.

// 투표 버튼 컴포넌트의 props 타입 정의
interface VoteButtonProps {
  option: string; // 버튼에 표시될 옵션 텍스트
  onVote: (option: string) => void; // 옵션 선택 시 호출될 콜백 함수
}

// 스타일이 적용된 VoteButton 컴포넌트
const StyledButton = styled.button`
  background-color: #007bff; /* 배경 색상 */
  color: white; /* 텍스트 색상 */
  border: none; /* 테두리 제거 */
  border-radius: 5px; /* 모서리 둥글게 */
  padding: 10px 15px; /* 패딩 */
  margin: 10px 0; /* 위쪽과 아래쪽 여백 */
  cursor: pointer; /* 커서 포인터로 변경 */
  transition: background-color 0.3s; /* 배경 색상 변화에 애니메이션 추가 */

  &:hover {
    background-color: #0056b3; /* 호버 시 배경 색상 변화 */
  }
`;

const VoteButton: React.FC<VoteButtonProps> = ({ option, onVote }) => {
  return (
    <StyledButton onClick={() => onVote(option)}>
      {option} {/* 버튼에 표시될 옵션 텍스트 */}
    </StyledButton>
  );
};

export default VoteButton;