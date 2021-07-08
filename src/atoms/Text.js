import React from "react";
import styled from "styled-components";
import { show } from "../globalStyles/Animations";

const StyledText = styled.p`
  color: ${({ theme }) => theme.colors.smokey};
  font-size: ${({ theme }) => theme.fontSizes.s};
  opacity: 0;
  animation: ${show} 0.1s ease forwards;
  animation-duration: 3s;
  animation-delay: 0.2s;
  animation-fill-mode: forwards;
`;

const Text = ({ children }) => {
  return <StyledText>{children}</StyledText>;
};

export default Text;
