import React from "react";
import styled, { css } from "styled-components";
import { titleAnimation } from "../globalStyles/Animations";

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  opacity: 0;
  position: relative;
  animation: ${titleAnimation} 0.1s ease forwards;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  @media (max-width: 430px) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
  @media (max-width: 320px) {
    font-size: ${({ theme }) => theme.fontSizes.l};
  }
  ${({ styleType }) =>
    styleType === "form" &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.xl};
      color: ${({ theme }) => theme.colors.darkBrown};
      @media (max-width: 320px) {
        font-size: ${({ theme }) => theme.fontSizes.m};
      }
    `}
  ${({ styleType }) =>
    styleType === "card" &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.xl};
      color: ${({ theme }) => theme.colors.smokey};
    `}
`;

const Title = ({ children, styleType }) => {
  return <StyledTitle styleType={styleType}>{children}</StyledTitle>;
};

export default Title;
