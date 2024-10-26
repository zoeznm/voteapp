import React from 'react';
import VoteButton from '../components/VoteButton';
import { useVote } from '../hooks/useVote';

const Vote: React.FC = () => {
  const { options, submitVote } = useVote();

  const handleVote = (option: string) => {
    submitVote(option);
  };

  return (
    <div className="vote-container">
      <h1>Vote for Your Favorite Option</h1>
      {options.map((option) => (
        <VoteButton key={option} option={option} onVote={handleVote} />
      ))}
    </div>
  );
};

export default Vote;
