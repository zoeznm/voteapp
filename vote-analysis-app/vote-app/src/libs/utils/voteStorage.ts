// localStorageUtils.ts
interface VoteResponse {
  success: boolean;
  message?: string;
}

interface ResultsData {
  [option: string]: number;
}

/**
 * 사용자의 투표 데이터를 로컬 스토리지에 저장하는 함수
 * @param option 사용자가 선택한 옵션 (문자열)
 * @returns 투표 성공 여부와 메시지를 포함하는 객체
 */
export const submitVote = async (option: string): Promise<VoteResponse> => {
  const results = JSON.parse(localStorage.getItem('voteResults') || '{}') as ResultsData;
  results[option] = (results[option] || 0) + 1;
  localStorage.setItem('voteResults', JSON.stringify(results));
  return { success: true, message: 'Vote submitted successfully' };
};

/**
 * 로컬 스토리지에서 투표 결과를 가져오는 함수
 * @returns 투표 결과 데이터 객체
 */
export const fetchResults = async (): Promise<ResultsData> => {
  const results = JSON.parse(localStorage.getItem('voteResults') || '{}') as ResultsData;
  return results;
};