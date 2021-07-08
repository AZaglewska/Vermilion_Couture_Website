import styled from "styled-components";
import { show } from "../../../globalStyles/Animations";

export const StyledPublicationsList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

export const StyledPublicationsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledPublicationsElements = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 ${({ theme }) => theme.margins.xl};
`;

export const StyledPublicationsImg = styled.img`
  width: 40%;
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
