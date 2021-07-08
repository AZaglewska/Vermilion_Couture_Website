import React from "react";
import styled from "styled-components";
import { titleAnimation } from "../globalStyles/Animations";

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 30px;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  opacity: 0;
  position: relative;
  animation: ${titleAnimation} 0.1s ease forwards;
  animation-duration: 3s;
  animation-fill-mode: forwards;
`;

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
