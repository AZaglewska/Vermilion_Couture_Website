import styled from "styled-components";

export const CarouselElement = styled.div`
  border: 2px solid green;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
`;

export const CarouselImage = styled.img`
  height: inherit;
  transition: transform 3s ease;
`;

export const CarouselImgWrapper = styled.div`
  overflow: hidden;
  height: 90vh;

  &:hover ${CarouselImage} {
    transform: scale(1.1);
  }
`;
