// src/app/app.tsx
import React, { useState } from 'react';
import { useFetchVotes } from './hooks/useFetchVotes';
import DataDisplay from './components/DataDisplay';
import BarChart from './components/BarChart';
import FilterOptions from './components/FilterOptions';

const App: React.FC = () => {
  const { votesData, loading } = useFetchVotes();
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (selectedFilter: string) => {
    setFilter(selectedFilter);
  };

  const getFilteredData = () => {
    if (filter === 'top') {
      return Object.fromEntries(
        Object.entries(votesData)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 5)
      );
    } else if (filter === 'recent') {
      return votesData; // 나중에 최근 데이터로 정렬
    }
    return votesData; // 전체 데이터
  };

  if (loading) {
    return <p>로딩 중...</p>;
  }

  const filteredData = getFilteredData();

  return (
    <div>
      <h1>Analysis App</h1>
      <FilterOptions onFilterChange={handleFilterChange} />
      <DataDisplay votesData={filteredData} />
      <BarChart data={filteredData} />
    </div>
  );
};

export default App;