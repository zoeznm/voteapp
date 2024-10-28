/* eslint-disable no-mixed-operators */
import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  option?: string; // 버튼에 표시될 옵션 텍스트 (선택적)
  onClick: () => void; // 클릭 시 호출될 콜백 함수
  color: string; // 배경색 (필수)
  children: React.ReactNode; // 버튼 내부에 표시될 내용
}

const StyledButton = styled.button<{ color: string }>`
  background-color: ${({ color }) => color};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 10px 0;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ color }) => shadeColor(color, -20)};
  }
`;

// 색상 어두운 버전 생성 함수
const shadeColor = (color: string, percent: number) => {
  const num = parseInt(color.replace("#", ""), 16);
  const amt = Math.floor(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;

  // 색상 값이 유효한지 체크
  const isValidColor = (value: number) => value < 255 ? (value < 1 ? 0 : value) : 255;

  return "#" + (0x1000000 + (isValidColor(R) * 0x10000 + isValidColor(G) * 0x100 + isValidColor(B))).toString(16).slice(1);
};

const Button: React.FC<ButtonProps> = ({ option, onClick, color, children }) => {
  return (
    <StyledButton color={color} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;