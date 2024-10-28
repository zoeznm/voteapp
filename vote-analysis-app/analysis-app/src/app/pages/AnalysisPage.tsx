import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Button} from '@vote-analysis-app/shared-ui'

const Container = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 30px;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 1rem;
  margin: 10px 0;
`;

const ResultContainer = styled.div`
  margin-top: 20px;
`;


// voteData 타입 정의
interface VoteData {
  topic: string;
  options: string[];
  votes: Record<string, number>;
}

const Analysis: React.FC = () => {
  const [voteData, setVoteData] = useState<VoteData[]>([]);
  const [selectedTopic, setSelectedTopic] = useState('');
  const [filteredVotes, setFilteredVotes] = useState<Record<string, number>>(
    {}
  );

  useEffect(() => {
    // 로컬 스토리지에서 데이터 불러오기
    const storedData = localStorage.getItem('topics');
    if (storedData) {
      const data: VoteData[] = JSON.parse(storedData);
      console.log("불러온 데이터:", data); // 데이터 확인용 로그 추가
      setVoteData(data);
    } else {
      console.log("로컬 스토리지에 데이터가 없습니다.");
    }
  }, []);

  const handleTopicChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const topic = e.target.value;
    setSelectedTopic(topic);

    // 선택한 주제에 따라 투표 결과 필터링
    if (topic) {
      const selectedVote = voteData.find((vote) => vote.topic === topic);
      setFilteredVotes(selectedVote ? selectedVote.votes : {});
    } else {
      setFilteredVotes({});
    }
  };

  const clearData = () => {
    localStorage.removeItem('topics');
    alert('모든 투표 결과가 초기화되었습니다.');
  };

  return (
    <Container>
      <Title>투표 결과 분석</Title>
      <Button onClick={clearData} color="#dc3545">초기화</Button>
      <label htmlFor="topicSelect">주제를 선택하세요:</label>
      <Select
        id="topicSelect"
        value={selectedTopic}
        onChange={handleTopicChange}
        aria-label="주제를 선택하세요" // 접근성을 위한 aria-label 추가
      >
        <option value="">주제를 선택하세요</option>
        {voteData.map((data, index) => (
          <option key={index} value={data.topic}>
            {data.topic}
          </option>
        ))}
      </Select>

      <ResultContainer>
        {selectedTopic && (
          <>
            <h2>{selectedTopic}에 대한 투표 결과</h2>
            {Object.entries(filteredVotes).map(([option, count]) => (
              <div key={option}>
                <span>
                  {option}: {count}표
                </span>
              </div>
            ))}
          </>
        )}
      </ResultContainer>
    </Container>
  );
};

export default Analysis;