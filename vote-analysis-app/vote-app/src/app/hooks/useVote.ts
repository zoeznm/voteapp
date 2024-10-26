import { useState } from 'react';
import { submitVoteAPI, fetchResultsAPI } from '../../libs/utils/api';

export const useVote = () => {
  const [options] = useState<string[]>(['Option 1', 'Option 2', 'Option 3']);
  const [results, setResults] = useState<Record<string, number>>({});

  const submitVote = async (option: string) => {
    await submitVoteAPI(option);
    await fetchResults();
  };

  const fetchResults = async () => {
    const data = await fetchResultsAPI();
    setResults(data);
  };

  return { options, results, submitVote, fetchResults };
};
