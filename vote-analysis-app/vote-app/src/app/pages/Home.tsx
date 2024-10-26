import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>투표하러 오신 것을 환영합니다!</h1>
      <Link to="/vote">투표하러 가기</Link>
    </div>
  );
};

export default Home;
