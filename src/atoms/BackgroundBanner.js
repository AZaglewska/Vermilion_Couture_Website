import React from "react";
import styled, { css } from "styled-components";

export const StyledBackgroundContainer = styled.div`
  ${({ image }) =>
    image &&
    css`
      background-image: url(${image});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 90% 39%;
      height: 50vh;
      width: 100%;

      @media (max-width: 1024px) {
        background-position: 40%;
        height: 35vh;
      }
    `};
`;

const BackgroundBanner = ({ children, styleType, image }) => {
  return (
    <StyledBackgroundContainer styleType={styleType} image={image}>
      {children}
    </StyledBackgroundContainer>
  );
};

export default BackgroundBanner;
