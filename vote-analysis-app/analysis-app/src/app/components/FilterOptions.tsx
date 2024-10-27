// src/app/components/FilterOptions.tsx
import React from 'react';

interface FilterOptionsProps {
  onFilterChange: (filter: string) => void;
}

const FilterOptions: React.FC<FilterOptionsProps> = ({ onFilterChange }) => {
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="filter">결과 필터링:</label>
      <select id="filter" onChange={handleFilterChange}>
        <option value="all">전체</option>
        <option value="top">상위 5개</option>
        <option value="recent">최근 투표</option>
      </select>
    </div>
  );
};

export default FilterOptions;