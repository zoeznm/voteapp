import { useState } from 'react';

// 초기 옵션 설정 제거

export const useVote = () => {
  const [results, setResults] = useState<Record<string, number>>(() => {
    const savedResults = localStorage.getItem('results');
    return savedResults ? JSON.parse(savedResults) : {};
  });

  const [options, setOptions] = useState<string[]>([]); // 초기 옵션 배열을 빈 배열로 설정

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
    setOptions([]); // 결과를 초기화할 때 옵션도 초기화
  };

  const addOption = (newOption: string) => {
    setOptions((prevOptions) => [...prevOptions, newOption]);
    setResults((prevResults) => ({
      ...prevResults,
      [newOption]: 0, // 새로운 옵션에 대한 초기 투표 수를 0으로 설정
    }));
    localStorage.setItem('results', JSON.stringify({
      ...JSON.parse(localStorage.getItem('results') || '{}'),
      [newOption]: 0,
    }));
  };

  return {
    results,
    fetchResults,
    resetResults,
    submitVote,
    options,
    addOption, // addOption을 반환
  };
};