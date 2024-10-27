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

const SubmitOptionButton = styled.button`
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
  const { submitVote, options, addOption, resetOptions } = useVote();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [newOption, setNewOption] = useState<string>('');
  const [topic, setTopic] = useState<string>(''); // 주제 상태 추가

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedOption && topic) {
      submitVote(selectedOption, topic); // 주제도 함께 전달
      alert('투표가 완료되었습니다!');
      resetOptions(); // 투표 후 선택 초기화
    } else {
      alert('주제와 옵션을 선택해 주세요.');
    }
  };

  const handleAddOption = () => {
    if (newOption && topic) {
      addOption(topic, newOption); // 주제도 함께 전달
      setNewOption('');
    } else {
      alert('옵션과 주제를 입력해 주세요.');
    }
  };

  return (
    <FormContainer>
      <Title>투표하기</Title>
      <form onSubmit={handleSubmit}>
        <div>
          <AddOptionInput
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="투표 주제 입력"
          />
        </div>
        {options[topic]?.map((option) => (
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
        <SubmitOptionButton type="submit">제출</SubmitOptionButton>
      </form>
      <button onClick={resetOptions}>투표 다시하기</button>
    </FormContainer>
  );
};

export default VoteForm;