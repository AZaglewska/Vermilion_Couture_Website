import React from "react";
import styled, { css } from "styled-components";
import { lineAnimation } from "../globalStyles/Animations";

const StyledLine = styled.div`
  margin-top: ${({ second }) => (second ? "40px" : "10px")};
  border-bottom: 2.5px solid;
  border-color: ${({ theme }) => theme.colors.goldBeige};
  animation: ${lineAnimation} 0.1s ease forwards;
  animation-duration: 3s;
  animation-fill-mode: forwards;

  ${({ styleType }) =>
    styleType === "greyLine" &&
    css`
      margin-top: ${({ theme }) => theme.margins.xs};
      border-bottom: 1.4px solid;
      border-color: ${({ theme }) => theme.colors.smokey};
    `}

  ${({ styleType }) =>
    styleType === "card" &&
    css`
      margin-top: ${({ theme }) => theme.margins.m};
      border-bottom: 1.5px solid;
      border-color: ${({ theme }) => theme.colors.smokey};
    `}
`;

const Line = ({ children, styleType, second }) => {
  return (
    <StyledLine styleType={styleType} second={second}>
      {children}
    </StyledLine>
  );
};

export default Line;
