import styled from "styled-components";
import { show } from "../../../globalStyles/Animations";

export const StyledFabricsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: ${show} 0.1s ease forwards;
  animation-duration: 3s;
`;

export const StyledFabricsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  padding: 40px 0;
`;

export const StyledFabricsListGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 430px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const StyledFabricsElement = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  list-style: none;
`;

export const StyledFabricsName = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.l};
  color: ${({ theme }) => theme.colors.smokey};
  margin-top: ${({ theme }) => theme.margins.l};

  @media (max-width: 430px) {
    font-size: ${({ theme }) => theme.fontSizes.m};
    margin-top: ${({ theme }) => theme.margins.m};
  }
`;

export const StyledFabricsLineWrapper = styled.div`
  width: 70%;
`;

export const StyledFabricsImage = styled.img`
  width: 100%;
  margin: ${({ theme }) => theme.margins.s} 0;
`;
