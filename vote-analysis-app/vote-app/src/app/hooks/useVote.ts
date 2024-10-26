import { useState } from 'react';
import { submitVoteAPI, fetchResultsAPI } from '../../libs/utils/api';

/**
 * 투표와 관련된 상태 및 기능을 관리하는 커스텀 훅
 * @returns options: 사용자가 선택할 수 있는 투표 옵션 배열
 *          results: 현재 투표 결과
 *          submitVote: 선택된 옵션으로 투표를 제출하는 함수
 *          fetchResults: 서버에서 투표 결과를 가져오는 함수
 */
export const useVote = () => {
  // 사용자가 선택할 수 있는 투표 옵션 상태
  const [options] = useState<string[]>(['Option 1', 'Option 2', 'Option 3']);
  
  // 투표 결과 상태 (옵션 이름을 키로, 투표 수를 값으로 가짐)
  const [results, setResults] = useState<Record<string, number>>({});

  /**
   * 선택된 옵션으로 투표를 제출하는 함수
   * @param option 사용자가 선택한 옵션
   */
  const submitVote = async (option: string) => {
    await submitVoteAPI(option); // 서버에 투표를 제출
    await fetchResults(); // 제출 후 결과를 다시 가져옴
  };

  /**
   * 서버에서 현재 투표 결과를 가져오는 함수
   */
  const fetchResults = async () => {
    const data = await fetchResultsAPI(); // 서버에서 결과 가져오기
    setResults(data); // 가져온 결과를 상태에 저장
  };

  return { options, results, submitVote, fetchResults }; // 상태 및 함수 반환
};