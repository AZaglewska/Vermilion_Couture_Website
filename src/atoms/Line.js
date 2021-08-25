import React from "react";
import styled, { css } from "styled-components";
import {
  lineAnimation,
  lineAnimation2,
  lineAnimation3,
} from "../globalStyles/Animations";

const StyledLine = styled.div`
  margin-top: ${(props) => (props.second ? "40px" : "10px")};
  border-bottom: 2.5px solid;
  border-color: ${({ theme }) => theme.colors.goldBeige};
  animation: ${lineAnimation3} 0.1s ease forwards;
  animation-duration: 3s;
  animation-fill-mode: forwards;

  ${({ styleType }) =>
    styleType === "about" &&
    css`
      animation: ${lineAnimation} 0.1s ease forwards;
      animation-duration: 3s;
      animation-fill-mode: forwards;
      border-color: ${({ theme }) => theme.colors.goldBeige};
    `}

  ${({ styleType }) =>
    styleType === "publications" &&
    css`
      animation: ${lineAnimation2} 0.1s ease forwards;
      animation-duration: 3s;
      animation-fill-mode: forwards;
    `}

    ${({ styleType }) =>
    styleType === "product" &&
    css`
      margin-top: 10px;
      border-bottom: 2.5px solid;
      border-color: ${({ theme }) => theme.colors.goldBeige};
      animation: ${lineAnimation2} 0.1s ease forwards;
      animation-duration: 3s;
      animation-fill-mode: forwards;
    `}
    ${({ styleType }) =>
    styleType === "questions" &&
    css`
      margin-top: ${(props) => (props.second ? "40px" : "10px")};
      border-bottom: 2.5px solid;
      border-color: ${({ theme }) => theme.colors.goldBeige};
      animation: ${lineAnimation3} 0.1s ease forwards;
      animation-duration: 3s;
      animation-fill-mode: forwards;
    `}

    ${({ styleType }) =>
    styleType === "greyLine" &&
    css`
      margin-top: ${({ theme }) => theme.margins.xs};
      border-bottom: 1.5px solid;
      border-color: ${({ theme }) => theme.colors.smokey};
      animation: ${lineAnimation} 0.1s ease forwards;
      animation-duration: 3s;
      animation-fill-mode: forwards;
    `}


    ${({ styleType }) =>
    styleType === "card" &&
    css`
      margin-top: ${({ theme }) => theme.margins.m};
      border-bottom: 1.5px solid;
      border-color: ${({ theme }) => theme.colors.smokey};
      animation: ${lineAnimation2} 0.1s ease forwards;
      animation-duration: 3s;
      animation-fill-mode: forwards;
    `}
`;

//  animation: ${(props) =>
//props.card ? `${lineAnimation3}` : `${lineAnimation}`}
//0.1s ease forwards;

const Line = ({ children, styleType, second }) => {
  return (
    <StyledLine styleType={styleType} second={second}>
      {children}
    </StyledLine>
  );
};

export default Line;
