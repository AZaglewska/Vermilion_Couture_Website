import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  width: 280px;
  @media (max-width: 320px) {
    width: 250px;
  }
`;

const Image = ({ children, styleType, src, alt }) => {
  return (
    <StyledImage src={src} alt={alt} styleType={styleType}>
      {children}
    </StyledImage>
  );
};

export default Image;
