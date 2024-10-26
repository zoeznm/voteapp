// 투표 결과 응답의 타입 정의
interface VoteResponse {
  success: boolean; // 투표 성공 여부
  message?: string; // 메시지 (선택적)
}

// 투표 결과 데이터의 타입 정의
interface ResultsData {
  [option: string]: number; // 옵션 이름을 키로 하고, 숫자를 값으로 가짐
}

/**
 * 사용자의 투표 데이터를 서버에 전송하는 함수
 * @param option 사용자가 선택한 옵션 (문자열)
 * @returns 서버 응답을 JSON 형식으로 반환
 */
export const submitVoteAPI = async (option: string): Promise<VoteResponse> => {
  const response = await fetch('/api/vote', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ option }),
  });

  if (!response.ok) {
    throw new Error('Failed to submit vote');
  }

  return response.json(); // 이 부분은 VoteResponse 타입으로 추론됨
};

/**
 * 서버에서 투표 결과를 가져오는 함수
 * @returns 투표 결과 데이터 객체를 JSON 형식으로 반환
 */
export const fetchResultsAPI = async (): Promise<ResultsData> => {
  const response = await fetch('/api/results');

  if (!response.ok) {
    throw new Error('Failed to fetch results');
  }

  return response.json(); // 이 부분은 ResultsData 타입으로 추론됨
};