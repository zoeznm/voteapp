import React from 'react';
import { Link } from 'react-router-dom'; // React Router의 Link 컴포넌트를 가져옵니다.

const Home: React.FC = () => {
  return (
    <div>
      <h1>투표하러 오신 것을 환영합니다!</h1> {/* 환영 메시지 제목 */}
      <Link to="/vote">투표하러 가기</Link> {/* 투표 페이지로 이동하는 링크 */}
    </div>
  );
};

export default Home; // Home 컴포넌트를 내보냅니다.