import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {Button} from '@vote-app/shared-ui';

const Container = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 30px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  margin: 10px 0;
`;

const Vote: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [options, setOptions] = useState<string[]>([]);
  const [newOption, setNewOption] = useState('');
  const [votes, setVotes] = useState<Record<string, number>>({});
  const navigate = useNavigate();

  const addOption = () => {
    if (newOption && !options.includes(newOption)) {
      setOptions([...options, newOption]);
      setVotes({ ...votes, [newOption]: 0 }); // 새로운 옵션의 투표 수를 0으로 초기화
      setNewOption('');
    }
  };

  const handleVote = (option: string) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [option]: prevVotes[option] + 1,
    }));
  };

  const handleSubmit = () => {
    const voteData = {
      topic,
      options,
      votes,
    };

    const storedTopics = JSON.parse(localStorage.getItem('topics') || '[]');
    storedTopics.push(voteData);
    localStorage.setItem('topics', JSON.stringify(storedTopics));

    navigate('/results');
  };

  return (
    <Container>
      <Title>Vote for Your Favorite Option</Title>
      <Input
        type="text"
        placeholder="주제를 입력하세요"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <Input
        type="text"
        placeholder="투표 옵션 추가"
        value={newOption}
        onChange={(e) => setNewOption(e.target.value)}
      />
      <Button color="#007bff" onClick={addOption}>옵션 추가</Button>

      <h2>투표 옵션</h2>
      {options.map((option) => (
        <div key={option}>
          <span>{option}</span>
          <Button color="#28a745" onClick={() => handleVote(option)}>투표</Button>
        </div>
      ))}

      <Button color="#17a2b8" onClick={handleSubmit}>결과 보기</Button>
    </Container>
  );
};

export default Vote;