import styled from "styled-components";
import {
  showAnimatedLogoComponent,
  animatedLogoPaths,
  colorChange,
} from "../../globalStyles/Animations";

export const StyledAnimatedLogoContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.lightBeige};
  z-index: 3;
  animation: ${showAnimatedLogoComponent} 0.1s ease forwards;
  animation-duration: 3s;
`;

export const StyledAnimatedLogo = styled.svg`
  width: 80px;
  height: 90px;
  animation: 2s ${colorChange} forwards;
  animation-delay: 4s;

  path:nth-child(1) {
    animation: 1s ${animatedLogoPaths} forwards;
    animation-delay: 0.5s;
    fill-opacity: 0;
  }

  path:nth-child(2) {
    animation: 1s ${animatedLogoPaths} forwards;
    animation-delay: 1s;
    fill-opacity: 0;
  }
  path:nth-child(3) {
    animation: 1s ${animatedLogoPaths} forwards;
    animation-delay: 1.5s;
    fill-opacity: 0;
  }

  path:nth-child(4) {
    animation: 1s ${animatedLogoPaths} forwards;
    fill-opacity: 0;
    animation-delay: 2s;
  }

  path:nth-child(5) {
    animation: 1s ${animatedLogoPaths} forwards;
    fill-opacity: 0;
    animation-delay: 2.5s;
  }
  path:nth-child(6) {
    animation: 1s ${animatedLogoPaths} forwards;
    animation-delay: 2.5s;
    fill-opacity: 0;
  }
  path:nth-child(7) {
    animation: 1s ${animatedLogoPaths} forwards;
    animation-delay: 3s;
    fill-opacity: 0;
  }

  path:nth-child(8) {
    animation: 1s ${animatedLogoPaths} forwards;
    animation-delay: 3s;
    fill-opacity: 0;
  }
`;

export const StyledAnimatedTitle = styled.svg`
  margin-top: -25px;
  width: 200px;
  height: 100px;
  animation: 4s ${animatedLogoPaths} forwards;
  animation-delay: 3.5s;
  fill-opacity: 0;
`;

export const StyledAnimatedSubtitle = styled.svg`
  width: 120px;
  margin-top: -13px;
  animation: 4s ${animatedLogoPaths} forwards;
  animation-delay: 3.5s;
  fill-opacity: 0;
`;
