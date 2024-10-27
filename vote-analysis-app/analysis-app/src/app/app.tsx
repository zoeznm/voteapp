// src/app/app.tsx
import React from 'react';
import { useFetchVotes } from './hooks/useFetchVotes';
import DataDisplay from './components/DataDisplay';

const App: React.FC = () => {
  const { votesData, loading } = useFetchVotes();

  if (loading) {
    return <p>로딩 중...</p>;
  }

  return (
    <div>
      <h1>Analysis App</h1>
      <DataDisplay votesData={votesData} />
    </div>
  );
};

export default App;