// useVote.ts

import { useState } from 'react';

export const useVote = () => {
  const [results, setResults] = useState<Record<string, number>>(() => {
    const savedResults = localStorage.getItem('results');
    return savedResults ? JSON.parse(savedResults) : {};
  });

  const [options, setOptions] = useState<string[]>([]);

  const submitVote = (option: string) => {
    setResults((prevResults) => {
      const newResults = { ...prevResults, [option]: (prevResults[option] || 0) + 1 };
      localStorage.setItem('results', JSON.stringify(newResults));
      return newResults;
    });
  };

  const fetchResults = () => {
    const savedResults = localStorage.getItem('results');
    if (savedResults) {
      setResults(JSON.parse(savedResults));
    }
  };

  const resetResults = () => {
    localStorage.removeItem('results');
    setResults({});
    setOptions([]);
  };

  const voteAgain = () => {
    localStorage.removeItem('results');  // 이전 투표 결과 초기화
    localStorage.removeItem('options');  // 이전 옵션 초기화
    setResults({});
    setOptions([]);
  };

  const addOption = (newOption: string) => {
    setOptions((prevOptions) => [...prevOptions, newOption]);
    setResults((prevResults) => ({
      ...prevResults,
      [newOption]: 0,
    }));
    localStorage.setItem(
      'results',
      JSON.stringify({
        ...JSON.parse(localStorage.getItem('results') || '{}'),
        [newOption]: 0,
      })
    );
  };

  // 추가된 resetOptions 함수 - 옵션만 초기화
  const resetOptions = () => {
    localStorage.removeItem('options');
    setOptions([]);
  };

  return {
    results,
    fetchResults,
    resetResults,
    submitVote,
    options,
    addOption,
    voteAgain,
    resetOptions, // resetOptions 반환 추가
  };
};