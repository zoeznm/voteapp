import React, { useEffect, useState } from 'react';
import { useVote } from '@vote/app/hooks/useVote';

const AnalysisPage: React.FC = () => {
  const { results, fetchResults } = useVote();
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [filteredResults, setFilteredResults] = useState(results);

  useEffect(() => {
    fetchResults();
  }, [fetchResults]);

  useEffect(() => {
    if (selectedTopic === 'all') {
      setFilteredResults(results);
    } else {
      setFilteredResults({
        [selectedTopic]: results[selectedTopic],
      });
    }
  }, [selectedTopic, results]);

  const handleTopicChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTopic(e.target.value);
  };

  return (
    <div>
      <h2>투표 결과 분석</h2>
      <label htmlFor="topicFilter">주제 선택: </label>
      <select id="topicFilter" onChange={handleTopicChange}>
        <option value="all">전체</option>
        {Object.keys(results).map((topic) => (
          <option key={topic} value={topic}>
            {topic}
          </option>
        ))}
      </select>
      <div>
        {Object.entries(filteredResults).map(([topic, data]) => (
          <div key={topic}>
            <h3>{topic}</h3>
            {Object.entries(data.options).map(([option, count]) => (
              <p key={option}>
                {option}: {count}표
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalysisPage;
