import React from "react";
import styled, { css } from "styled-components";
import { lineAnimation, lineAnimation2 } from "../globalStyles/Animations";

const StyledLine = styled.div`
  border-bottom: 1.2px solid;
  border-color: ${({ theme }) => theme.colors.darkGrey};
  margin: ${({ theme }) => theme.margins.l} 0;
  opacity: 0;

  ${({ styleType }) =>
    styleType === "about" &&
    css`
      animation: ${lineAnimation} 0.1s ease forwards;
      animation-duration: 3s;
      animation-fill-mode: forwards;
    `}

  ${({ styleType }) =>
    styleType === "publications" &&
    css`
      animation: ${lineAnimation2} 0.1s ease forwards;
      animation-duration: 3s;
      animation-fill-mode: forwards;
    `}
`;

const Line = ({ children, styleType }) => {
  return <StyledLine styleType={styleType}>{children}</StyledLine>;
};

export default Line;
