import React from 'react';

// 투표 버튼 컴포넌트의 props 타입 정의
interface VoteButtonProps {
  option: string; // 버튼에 표시될 옵션 텍스트
  onVote: (option: string) => void; // 옵션 선택 시 호출될 콜백 함수
}

/**
 * 사용자가 투표할 옵션을 선택할 수 있는 버튼 컴포넌트
 * @param {VoteButtonProps} props - 옵션과 콜백 함수를 포함한 props
 */
const VoteButton: React.FC<VoteButtonProps> = ({ option, onVote }) => {
  return (
    <button onClick={() => onVote(option)} className="vote-button">
      {option} {/* 버튼에 표시될 옵션 텍스트 */}
    </button>
  );
};

export default VoteButton;