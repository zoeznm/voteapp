import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useHistory 대신 useNavigate로 변경
import styled from 'styled-components';

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

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const OptionInput = styled.input`
  margin: 10px 0;
`;

const Vote: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [options, setOptions] = useState<string[]>([]);
  const [newOption, setNewOption] = useState('');
  const [votes, setVotes] = useState<Record<string, number>>({});
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 네비게이션 기능 추가

  const addOption = () => {
    if (newOption && !options.includes(newOption)) {
      setOptions([...options, newOption]);
      setNewOption('');
    }
  };

  const handleVote = (option: string) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [option]: (prevVotes[option] || 0) + 1,
    }));
    alert('투표가 완료되었습니다.'); // 알림 추가
  };

  const handleSubmit = () => {
    // 로컬 스토리지에 주제와 옵션 저장
    const voteData = { topic, options, votes };
    localStorage.setItem('voteData', JSON.stringify(voteData));
    
    // 결과 페이지로 이동
    navigate('/results'); // 결과 페이지로 이동
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
      <OptionInput
        type="text"
        placeholder="투표 옵션 추가"
        value={newOption}
        onChange={(e) => setNewOption(e.target.value)}
      />
      <Button onClick={addOption}>옵션 추가</Button>
      
      <h2>투표 옵션</h2>
      {options.map((option) => (
        <div key={option}>
          <span>{option}</span>
          <Button onClick={() => handleVote(option)}>투표</Button>
        </div>
      ))}

      <Button onClick={handleSubmit}>결과 보기</Button>
    </Container>
  );
};

export default Vote;