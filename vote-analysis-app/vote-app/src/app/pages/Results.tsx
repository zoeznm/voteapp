// Result.tsx
import React from 'react';
import {Chart} from '@vote-app/shared-ui';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);


const Result: React.FC = () => {
  const storedTopics = JSON.parse(localStorage.getItem('topics') || '[]');
  const voteData = storedTopics.length > 0 ? storedTopics[storedTopics.length - 1] : null;

  if (!voteData) {
    return <p>투표 결과가 없습니다.</p>;
  }


  return (
    <div>
      <h1>투표 결과</h1>
      <Chart type="bar" data={voteData.votes} title={voteData.topic} />
    </div>
  );
};

export default Result;