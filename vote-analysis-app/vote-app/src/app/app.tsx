// src/app/app.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Vote from './pages/Vote';
import Results from './pages/Results';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vote" element={<Vote />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  );
};

export default App;