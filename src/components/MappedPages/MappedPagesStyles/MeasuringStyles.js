import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { show } from "../../../globalStyles/Animations";

export const StyledMeasuringList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${show} 0.1s ease forwards;
  animation-duration: 3s;
`;

export const StyledMeasuringElements = styled.li`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  list-style: none;
  margin: ${({ theme }) => theme.margins.xl} 0;
`;

export const StyledMeasuringContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme }) => theme.margins.l};
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const StyledMeasuringImage = styled.img`
  width: 500px;
  @media (max-width: 1024px) {
    margin-bottom: ${({ theme }) => theme.margins.l};
    width: 60%;
  }

  @media (max-width: 540px) {
    width: 80%;
  }
`;

export const StyledReactMarkdown = styled(ReactMarkdown)`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 25px;
  @media (max-width: 320px) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;
