// VoteForm.tsx

import React, { useState } from 'react';
import { useVote } from '../hooks/useVote';
import styled from 'styled-components';

const FormContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

const OptionButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const AddOptionInput = styled.input`
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const AddOptionButton = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }
`;
const SumitOptionbutton = styled.button`
  padding: 10px 20px;
  background-color: purple;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #dedede;
  }
`;

const VoteForm: React.FC = () => {
  const { submitVote, options, addOption } = useVote(); // addOption 추가
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [newOption, setNewOption] = useState<string>(''); // 새로운 옵션 상태 추가

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  // const handleResetOptions = () => {
  //   resetOptions(); // 옵션 초기화 함수 호출
  // };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedOption) {
      submitVote(selectedOption);
      alert('투표가 완료되었습니다!');
    }
  };

  const handleAddOption = () => {
    if (newOption) {
      addOption(newOption); // 새로운 옵션 추가
      setNewOption(''); // 입력 필드 초기화
    } else {
      alert('옵션을 입력해 주세요.');
    }
  };

  return (
    <FormContainer>
      <Title>투표하기</Title>
      <form onSubmit={handleSubmit}>
        {options.map((option) => (
          <OptionButton key={option} onClick={() => handleOptionSelect(option)}>
            {option}
          </OptionButton>
        ))}
        <div>
          <AddOptionInput
            type="text"
            value={newOption}
            onChange={(e) => setNewOption(e.target.value)}
            placeholder="새로운 옵션 추가"
          />
          <AddOptionButton type="button" onClick={handleAddOption}>
            추가
          </AddOptionButton>
        </div>
        <SumitOptionbutton type="submit">제출</SumitOptionbutton>
      </form>
      {/* <button onClick={handleResetOptions}>투표 다시하기</button> */}
    </FormContainer>
  );
};

export default VoteForm;