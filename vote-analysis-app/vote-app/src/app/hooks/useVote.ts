// useVote.ts
import { useState, useEffect } from 'react';

interface VoteData {
  options: Record<string, number>; // 각 옵션에 대한 투표 수
}

export const useVote = () => {
  const [results, setResults] = useState<Record<string, VoteData>>({});
  const [options, setOptions] = useState<Record<string, string[]>>({});

  // 투표 결과를 가져오는 함수
  const fetchResults = () => {
    // API 호출 등으로 결과를 가져오는 로직을 구현합니다.
    // 예시:
    // fetch('/api/results')
    //   .then(response => response.json())
    //   .then(data => setResults(data));
  };

  // 새로운 옵션을 추가하는 함수
  const addOption = (topic: string, newOption: string) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [topic]: [...(prevOptions[topic] || []), newOption],
    }));
  };

  // 투표를 제출하는 함수
  const submitVote = (option: string, topic: string) => {
    setResults((prevResults) => {
      const currentVoteData = prevResults[topic] || { options: {} };
      const updatedOptions = {
        ...currentVoteData.options,
        [option]: (currentVoteData.options[option] || 0) + 1,
      };
      return {
        ...prevResults,
        [topic]: { options: updatedOptions },
      };
    });
  };

  // 결과를 초기화하는 함수
  const resetResults = () => {
    setResults({});
  };

  // 옵션을 초기화하는 함수
  const resetOptions = () => {
    setOptions({});
  };

  // 투표를 다시 하도록 초기화하는 함수
  const voteAgain = () => {
    resetOptions(); // 옵션도 초기화
    resetResults(); // 결과도 초기화
  };

  // 컴포넌트가 마운트될 때 결과를 가져옵니다.
  useEffect(() => {
    fetchResults();
  }, []);

  return {
    results,
    options,
    fetchResults,
    addOption,
    submitVote,
    resetResults,
    resetOptions, // resetOptions 추가
    voteAgain,
  };
};