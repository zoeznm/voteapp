// src/app/app.tsx
import React from 'react';
import { useFetchVotes } from './hooks/useFetchVotes';
import DataDisplay from './components/DataDisplay';
import BarChart from './components/BarChart';

const App: React.FC = () => {
  const { votesData, loading } = useFetchVotes();

  if (loading) {
    return <p>로딩 중...</p>;
  }

  return (
    <div>
      <h1>Analysis App</h1>
      <DataDisplay votesData={votesData} />
      <BarChart data={votesData} />
    </div>
  );
};

export default App;