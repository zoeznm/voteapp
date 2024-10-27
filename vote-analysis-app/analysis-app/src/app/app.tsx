// App.tsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AnalysisPage from './pages/AnalysisPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/analysis" element={<AnalysisPage />} />
    </Routes>
  );
};

export default App;