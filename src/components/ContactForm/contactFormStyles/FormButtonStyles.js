import styled from "styled-components";

export const LoadingSpinnerSvg = styled.svg`
  position: absolute;
  top: -35%;
  left: 30%;
  width: 70px;
  stroke: ${({ theme }) => theme.colors.darkBrown};
`;

export const ShapeSvg = styled.svg`
  height: 40px;
  width: 150px;
`;

export const ShapeRectSvg = styled.rect`
  height: 40px;
  width: 150px;
  stroke-width: 2px;
  fill: transparent;
  stroke: ${({ theme }) => theme.colors.darkBrown};
  stroke-dasharray: 85 400;
  stroke-dashoffset: -220;
  transition: 1s all ease;
`;
export const TextSvg = styled.p`
  margin-top: -30px;
  text-align: center;
  color: ${({ theme }) => theme.colors.darkBrown};
  text-transform: uppercase;
  transition: 1s all ease;
`;

export const ArrowSvg = styled.svg`
  width: 11px;
  position: absolute;
  left: 70%;
  bottom: 20%;
  fill: ${({ theme }) => theme.colors.darkBrown};
  transition: 1s all ease;
`;

export const ButtonSvg = styled.button`
  width: 150px;
  height: 40px;
  position: relative;
  outline: none;
  border: none;
  background-color: transparent;

  &:active {
    ${TextSvg} {
      color: ${({ theme }) => theme.colors.lightBeige};
    }
    ${ArrowSvg} {
      fill: ${({ theme }) => theme.colors.lightBeige};
    }
    ${ShapeRectSvg} {
      fill: ${({ theme }) => theme.colors.darkBrown};
    }
  }

  &:hover {
    ${ShapeRectSvg} {
      stroke-dasharray: 50 0;
      stroke-width: 2px;
      stroke-dashoffset: 0;
    }
  }

  &:focus {
    ${ShapeRectSvg} {
      stroke-dasharray: 50 0;
      stroke-width: 2px;
      stroke-dashoffset: 0;
    }
  }
`;
