// Home.tsx
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// 스타일드 컴포넌트 정의
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f5f5f5;
    color: #333;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    margin: 20px 0;
`;

const Description = styled.p`
    font-size: 1.2rem;
    margin: 10px 0 30px;
`;

const Button = styled.button`
    padding: 10px 20px;
    font-size: 1rem;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`;

const Home: React.FC = () => {
    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleNavigate = () => {
        navigate('/analysis'); // /analysis로 이동
    };

    return (
        <Container>
            <Title>Welcome to the Home Page</Title>
            <Description>Explore our features and get started!</Description>
            <Button onClick={handleNavigate}>Go to Analysis</Button>
        </Container>
    );
};

export default Home;