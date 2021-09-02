import styled from "styled-components";
import { show } from "../../../globalStyles/Animations";

export const StyledAlertWrapper = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.s};
  margin: ${({ theme }) => theme.margins.s} 0;
`;

export const StyledAlert = styled.p`
  color: ${({ error }) => (error ? "#ba0021" : "#1f613c")};
  animation: ${show} 0.1s ease forwards;
  animation-duration: 3s;
`;
