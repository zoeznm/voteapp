import React from 'react';
import { Link } from 'react-router-dom'; // Link 컴포넌트 가져오기
import VoteButton from '../components/VoteButton'; // 투표 버튼 컴포넌트를 가져옵니다.
import { useVote } from '../hooks/useVote'; // 사용자 정의 훅을 가져옵니다.

const Vote: React.FC = () => {
  // useVote 훅을 사용하여 옵션과 submitVote 함수를 가져옵니다.
  const { options, submitVote } = useVote();

  // 사용자가 투표 버튼을 클릭했을 때 호출되는 함수
  const handleVote = (option: string) => {
    submitVote(option); // 선택한 옵션으로 투표를 제출합니다.
  };

  return (
    <div className="vote-container">
      <h1>Vote for Your Favorite Option</h1> {/* 투표 제목 */}
      {options.map((option) => (
        // 각 옵션에 대한 VoteButton 컴포넌트를 렌더링합니다.
        <VoteButton key={option} option={option} onVote={handleVote} />
      ))}
      <Link to="/results"> {/* 결과 보기 버튼 추가 */}
        <button>결과 보기</button>
      </Link>
    </div>
  );
};

export default Vote; // Vote 컴포넌트를 내보냅니다.