import styled from "styled-components";
import { show } from "../../globalStyles/Animations";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const SingleProductContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 50px 0;
  animation: ${show} 0.1s ease forwards;
  animation-duration: 3s;

  @media (max-width: 940px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const SingleProductIcon = styled.svg`
  width: 20px;
  position: absolute;
  z-index: 3;
  cursor: pointer;
  right: 3%;
  top: 100px;
  opacity: 0;
  transition-property: top, opacity;
  transition-duration: 0.3s;
  transition-delay: 0s;
`;

export const SingleProductCarouselWrapper = styled.div`
  width: 25%;
  position: relative;

  @media (max-width: 940px) {
    width: 50%;
  }
  :hover {
    ${SingleProductIcon} {
      opacity: 1;
      top: 1.6%;
    }
  }
`;

export const SingleProductCarousel = styled(Carousel)`
  cursor: pointer;
`;

export const SingleProductElements = styled.div`
  width: 45%;

  @media (max-width: 940px) {
    width: 90%;
  }
`;

export const SingleProductPrice = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: ${({ theme }) => theme.colors.smokey};
  margin: ${({ theme }) => theme.margins.l} 0;
  span {
    margin-left: 5px;
  }
`;

export const SingleProductText = styled.div`
  margin: 20px 0 40px 0;
`;

export const SingleProductIconWrapper = styled.div`
  margin-top: ${({ theme }) => theme.margins.l};
  display: flex;
  justify-content: space-between;
`;

export const SingleProductInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.margins.l};
`;
