import styled from "styled-components";
import { lineAnimation, show } from "../../../globalStyles/Animations";

export const StyledAboutList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

export const StyledAboutContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledAboutElements = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 ${({ theme }) => theme.margins.xl};
`;

export const StyledAboutImg = styled.img`
  width: 300px;
  height: 60vh;
  animation: ${show} 0.1s ease forwards;
  opacity: 0;
  animation-duration: 3s;
  animation-fill-mode: forwards;
`;

export const StyledTitleContainer = styled.div`
  align-self: flex-start;
  margin-bottom: ${({ theme }) => theme.margins.l};
`;

export const StyledLine = styled.div`
  border-bottom: 1.2px solid;
  border-color: ${({ theme }) => theme.colors.darkGrey};
  width: 80%;
  margin: ${({ theme }) => theme.margins.l} 0;
  animation: ${lineAnimation} 0.1s ease forwards;
  opacity: 0;
  animation-duration: 3s;
  animation-fill-mode: forwards;
`;
