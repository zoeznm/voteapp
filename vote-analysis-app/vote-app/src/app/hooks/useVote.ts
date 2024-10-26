import { useState, useEffect } from 'react';

/**
 * 투표와 관련된 상태 및 기능을 관리하는 커스텀 훅
 * @returns options: 사용자가 선택할 수 있는 투표 옵션 배열
 *          results: 현재 투표 결과
 *          submitVote: 선택된 옵션으로 투표를 제출하는 함수
 *          fetchResults: 현재 투표 결과를 가져오는 함수
 *          resetResults: 투표 결과를 초기화하는 함수
 */
export const useVote = () => {
  const [options] = useState<string[]>(['Option 1', 'Option 2', 'Option 3']);
  const [results, setResults] = useState<Record<string, number>>({});

  const submitVote = (option: string) => {
    // 현재 결과에서 선택된 옵션의 투표 수 증가
    setResults((prevResults) => {
      const updatedResults = {
        ...prevResults,
        [option]: (prevResults[option] || 0) + 1,
      };

      // 로컬 스토리지에 저장
      localStorage.setItem('voteResults', JSON.stringify(updatedResults));
      return updatedResults; // 상태를 업데이트
    });
  };

  const fetchResults = () => {
    const storedResults = localStorage.getItem('voteResults');
    if (storedResults) {
      setResults(JSON.parse(storedResults));
    }
  };

  const resetResults = () => {
    setResults({}); // 상태를 초기화
    localStorage.removeItem('voteResults'); // 로컬 스토리지 초기화
  };

  useEffect(() => {
    fetchResults(); // 초기 결과를 가져오는 함수 호출
  }, []);

  return { options, results, submitVote, fetchResults, resetResults }; // resetResults 추가
};