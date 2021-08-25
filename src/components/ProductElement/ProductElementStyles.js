import styled from "styled-components";
import { Link } from "react-router-dom";

export const CarouselElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const CarouselIcon = styled.svg`
  position: relative;
  top: 100px;
  opacity: 0;
  transition-property: top, opacity;
  transition-duration: 0.3s;
  transition-delay: 0s;
  width: 20px;
`;

export const CarouselProductName = styled.p`
  position: relative;
  top: 100px;
  opacity: 0;
  transition-property: top, opacity;
  transition-duration: 0.3s;
  transition-delay: 0s;
  color: ${({ theme }) => theme.colors.light};
`;

export const CarouselLink = styled(Link)`
  display: inline-block;
  margin: ${({ theme }) => theme.margins.s};
  opacity: 0.99;
  overflow: hidden;
  position: relative;

  :hover {
    ${CarouselIcon} {
      opacity: 1;
      top: 0;
    }

    ${CarouselProductName} {
      opacity: 1;
      top: 0;
    }
  }
`;

export const CarouselImage = styled.img`
  height: inherit;
  transition: transform 3s ease;
  backface-visibility: hidden;
  width: 350;
`;

export const CarouselTransparentColor = styled.div`
  height: inherit;
  width: inherit;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 0;
  left: 0;
  transition: background-color 0.3s ease;
`;

export const CarouselImgWrapper = styled.div`
  overflow: hidden;
  height: 70vh;
  width: 100%;
  position: relative;

  :hover {
    ${CarouselImage} {
      transform: scale(1.1);
    }

    ${CarouselTransparentColor} {
      background-color: ${({ theme }) => theme.colors.darkTransparent};
    }
  }
`;

export const CarouselIconWrapper = styled.div`
  position: absolute;
  right: 5%;
  top: 3%;
  z-index: 3;
`;

export const CarouselProductNameWrapper = styled.div`
  position: absolute;
  right: 40%;
  bottom: 3%;
  left: 40%;
  z-index: 3;
`;
