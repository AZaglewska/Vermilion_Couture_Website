import styled from "styled-components";
import { show } from "../../../globalStyles/Animations";

export const StyledAboutList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 40px 0;
  animation: ${show} 0.1s ease forwards;
  animation-duration: 3s;
`;

export const StyledAboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StyledAboutContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: ${({ theme }) => theme.margins.l} 0;
  width: ${({ third }) => (third ? "60%" : "80%")};

  @media (max-width: 1024px) {
    flex-direction: ${({ second }) => (second ? "column-reverse" : "column")};
  }
  @media (max-width: 540px) {
    width: 90%;
  }
`;
export const StyledAboutTitleWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.margins.m};
`;

export const StyledAboutElements = styled.div`
  width: 80%;
  text-align: center;
`;

export const StyledAboutTextContainer = styled.div`
  margin: 0 ${({ theme }) => theme.margins.m};
  display: flex;
  flex-direction: column;
  width: 60%;
  @media (max-width: 1024px) {
    width: 90%;
    margin: ${({ theme }) => theme.margins.l} 0 0 0;
  }
`;
