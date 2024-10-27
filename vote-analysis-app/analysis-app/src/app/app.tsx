import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnalysisPage from './pages/AnalysisPage';
// 다른 페이지 import...

function App() {
  return (
    <Router>
      <Routes>
        {/* 다른 라우트 */}
        <Route path="/analysis" element={<AnalysisPage />} />
      </Routes>
    </Router>
  );
}

export default App;