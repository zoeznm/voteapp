import React from 'react';

interface VoteButtonProps {
  option: string;
  onVote: (option: string) => void;
}

const VoteButton: React.FC<VoteButtonProps> = ({ option, onVote }) => {
  return (
    <button onClick={() => onVote(option)} className="vote-button">
      {option}
    </button>
  );
};

export default VoteButton;