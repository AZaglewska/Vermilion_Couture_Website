import styled from "styled-components";
import { show } from "../../../globalStyles/Animations";

export const ArrowUpIcon = styled.svg`
  animation: ${show} 0.1s ease forwards;
  animation-duration: 3s;
  width: 45px;
  height: 45px;
  position: fixed;
  z-index: 5;
  bottom: 10%;
  right: 1%;
  cursor: pointer;
  fill: rgba(102, 102, 102, 0.8);
  opacity: 0.3;
  transition: 1s all ease;
  &:hover {
    fill: rgba(102, 102, 102, 0.5);
  }
  @media (max-width: 430px) {
    width: 35px;
  }
`;
