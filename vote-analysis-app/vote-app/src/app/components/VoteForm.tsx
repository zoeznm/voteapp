import React, { useState } from 'react';
import styled from 'styled-components'; // Styled Components를 임포트합니다.

/**
 * 사용자가 투표할 옵션을 선택하는 폼 컴포넌트
 */
const FormContainer = styled.div`
  display: flex;
  flex-direction: column; /* 세로 방향으로 정렬 */
  align-items: center; /* 중앙 정렬 */
  margin-top: 50px; /* 위쪽 여백 */
`;

const StyledForm = styled.form`
  background-color: #f9f9f9; /* 배경 색상 */
  border: 1px solid #ddd; /* 테두리 색상 */
  border-radius: 8px; /* 모서리 둥글게 */
  padding: 20px; /* 패딩 */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
  width: 300px; /* 폼 너비 */
`;

const Title = styled.h3`
  margin-bottom: 20px; /* 아래쪽 여백 */
  font-size: 1.5rem; /* 제목 크기 */
  color: #333; /* 제목 색상 */
`;

const Label = styled.label`
  display: block; /* 블록 요소로 변경 */
  margin-bottom: 15px; /* 아래쪽 여백 */
  cursor: pointer; /* 커서 포인터로 변경 */
`;

const RadioInput = styled.input`
  margin-right: 10px; /* 오른쪽 여백 */
`;

const SubmitButton = styled.button`
  padding: 10px 20px; /* 패딩 */
  background-color: #007bff; /* 배경 색상 */
  color: white; /* 텍스트 색상 */
  border: none; /* 테두리 제거 */
  border-radius: 5px; /* 모서리 둥글게 */
  cursor: pointer; /* 커서 포인터로 변경 */
  transition: background-color 0.3s; /* 배경 색상 변화에 애니메이션 추가 */

  &:hover {
    background-color: #0056b3; /* 호버 시 배경 색상 변화 */
  }
`;

const VoteForm: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedOption) {
      localStorage.setItem('vote', selectedOption);
      alert('투표가 완료되었습니다!');
    }
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <Title>어떤 옵션을 선택하시겠습니까?</Title>
        <Label>
          <RadioInput
            type="radio"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          Option 1
        </Label>
        <Label>
          <RadioInput
            type="radio"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          Option 2
        </Label>
        <SubmitButton type="submit">투표하기</SubmitButton>
      </StyledForm>
    </FormContainer>
  );
};

export default VoteForm;