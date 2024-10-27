// src/app/hooks/useFetchVotes.ts
import { useState, useEffect } from 'react';

export const useFetchVotes = () => {
  const [votesData, setVotesData] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVotes = () => {
      const savedData = localStorage.getItem('results');
      if (savedData) {
        setVotesData(JSON.parse(savedData));
      }
      setLoading(false);
    };
    fetchVotes();
  }, []);

  return { votesData, loading };
};