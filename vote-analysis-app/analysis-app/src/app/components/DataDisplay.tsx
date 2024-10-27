// src/app/components/DataDisplay.tsx
import React from 'react';

interface DataDisplayProps {
  votesData: Record<string, number>;
}

const DataDisplay: React.FC<DataDisplayProps> = ({ votesData }) => {
  return (
    <div>
      <h2>투표 결과</h2>
      <ul>
        {Object.entries(votesData).map(([option, count]) => (
          <li key={option}>
            <strong>{option}:</strong> {count}표
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataDisplay;