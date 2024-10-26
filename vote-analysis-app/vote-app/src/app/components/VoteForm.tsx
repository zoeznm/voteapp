import React, { useState } from 'react';

/**
 * 사용자가 투표할 옵션을 선택하는 폼 컴포넌트
 */
const VoteForm = () => {
  // 선택된 옵션 상태 (기본값은 빈 문자열)
  const [selectedOption, setSelectedOption] = useState<string>('');

  /**
   * 폼 제출 시 호출되는 함수
   * @param e 폼 이벤트 객체
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // 기본 폼 제출 동작 방지
    if (selectedOption) {
      localStorage.setItem('vote', selectedOption); // 선택된 옵션을 로컬 스토리지에 저장
      alert('투표가 완료되었습니다!'); // 투표 완료 알림
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>어떤 옵션을 선택하시겠습니까?</h3>
      <label>
        <input
          type="radio"
          value="option1"
          checked={selectedOption === 'option1'} // 선택된 옵션인지 확인
          onChange={(e) => setSelectedOption(e.target.value)} // 옵션 선택 변경
        />
        Option 1
      </label>
      <label>
        <input
          type="radio"
          value="option2"
          checked={selectedOption === 'option2'} // 선택된 옵션인지 확인
          onChange={(e) => setSelectedOption(e.target.value)} // 옵션 선택 변경
        />
        Option 2
      </label>
      <button type="submit">투표하기</button> {/* 투표 제출 버튼 */}
    </form>
  );
};

export default VoteForm;