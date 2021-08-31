import React from "react";
import styled, { css } from "styled-components";

const StyledText = styled.p`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 25px;

  ${({ styleType }) =>
    styleType === "about" &&
    css`
      margin-top: ${({ marginTop }) => (marginTop ? "15px" : "none")};
      @media (max-width: 320px) {
        font-size: ${({ theme }) => theme.fontSizes.xs};
      }
    `}

  ${({ styleType }) =>
    styleType === "biggerText" &&
    css`
      margin: ${({ theme }) => theme.margins.l} 0;
      font-size: 17px;
    `}
`;

const Text = ({ children, marginTop, styleType }) => {
  return (
    <StyledText marginTop={marginTop} styleType={styleType}>
      {children}
    </StyledText>
  );
};

export default Text;
