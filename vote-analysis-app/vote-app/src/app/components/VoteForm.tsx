import React, { useState } from 'react';

const VoteForm = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedOption) {
      localStorage.setItem('vote', selectedOption); // 간단한 저장 로직
      alert('투표가 완료되었습니다!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>어떤 옵션을 선택하시겠습니까?</h3>
      <label>
        <input
          type="radio"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={(e) => setSelectedOption(e.target.value)}
        />
        Option 1
      </label>
      <label>
        <input
          type="radio"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={(e) => setSelectedOption(e.target.value)}
        />
        Option 2
      </label>
      <button type="submit">투표하기</button>
    </form>
  );
};

export default VoteForm;
