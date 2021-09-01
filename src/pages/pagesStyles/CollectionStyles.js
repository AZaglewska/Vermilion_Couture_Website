import styled from "styled-components";
import { show } from "../../globalStyles/Animations";

export const CollectionContent = styled.div`
  animation: ${show} 0.1s ease forwards;
  animation-duration: 3s;
`;

export const CollectionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CollectionElements = styled.div`
  width: 90%;
  text-align: center;
  margin: ${({ theme }) => theme.margins.xl} 0;
`;
