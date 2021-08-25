import styled from "styled-components";
import backgroundImage from "../../../assets/images/background/pexels-cottonbro-4614231.jpg";
import { show } from "../../../globalStyles/Animations";

export const StyledFabricsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: ${show} 0.1s ease forwards;
  animation-duration: 3s;
`;

export const StyledFabricsBackground = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 90% 39%;
  height: 50vh;
  width: 100%;
`;

export const StyledFabricsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: ${({ theme }) => theme.margins.xl} 0;
`;

export const StyledFabricsListGrid = styled.ul`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`;

export const StyledFabricsElement = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  list-style: none;
`;

export const StyledFabricsImage = styled.img`
  width: 100%;
  margin: ${({ theme }) => theme.margins.s} 0;
`;

export const StyledFabricsName = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.l};
  color: ${({ theme }) => theme.colors.smokey};
  margin-top: ${({ theme }) => theme.margins.l};
`;
