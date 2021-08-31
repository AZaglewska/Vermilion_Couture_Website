import styled from "styled-components";
import { show } from "../../../globalStyles/Animations";

export const AboutCollectionList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 40px 0 20px 0;
  animation: ${show} 0.1s ease forwards;
  animation-duration: 3s;
`;

export const AboutCollectionWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  @media (max-width: 1024px) {
    width: 80%;
    flex-direction: ${({ second }) => (second ? "column-reverse" : "column")};
  }
`;

export const AboutCollectionImg = styled.img`
  width: 40%;
  @media (max-width: 1024px) {
    width: 100%;
    margin-bottom: ${({ theme }) => theme.margins.l};
  }
`;

export const AboutCollectionElements = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const AboutCollectionTitle = styled.div`
  align-self: flex-start;
  margin-bottom: ${({ theme }) => theme.margins.m};
`;

export const AboutCollectionLine = styled.div`
  width: 90%;
  margin: ${({ theme }) => theme.margins.m} 0;
  @media (max-width: 1024px) {
    width: 80%;
  }
`;
