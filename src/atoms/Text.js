import React from "react";
import styled, { css } from "styled-components";

const StyledText = styled.p`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 25px;
  @media (max-width: 320px) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }

  ${({ styleType }) =>
    styleType === "about" &&
    css`
      margin-top: ${({ marginTop }) => (marginTop ? "15px" : "none")};
    `}

  ${({ styleType }) =>
    styleType === "biggerText" &&
    css`
      margin: ${({ theme }) => theme.margins.m} 0;
      font-size: 17px;
      @media (max-width: 320px) {
        font-size: ${({ privacyPolicy }) => (privacyPolicy ? "12px" : "15px")};
      }
    `}
`;

const Text = ({ children, marginTop, privacyPolicy, styleType }) => {
  return (
    <StyledText
      marginTop={marginTop}
      privacyPolicy={privacyPolicy}
      styleType={styleType}
    >
      {children}
    </StyledText>
  );
};

export default Text;
