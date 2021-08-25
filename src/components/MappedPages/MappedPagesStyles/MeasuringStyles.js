import styled from "styled-components";
import backgroundImage from "../../../assets/images/background/pexels-cottonbro-4614224.jpg";
import { show } from "../../../globalStyles/Animations";
import ReactMarkdown from "react-markdown";

export const StyledMeasuringList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${show} 0.1s ease forwards;
  animation-duration: 3s;
`;

export const StyledMeasuringBackground = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 90% 39%;
  height: 50vh;
  width: 100%;
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
`;

export const StyledMeasuringImage = styled.img`
  width: 500px;
`;

export const StyledReactMarkdown = styled(ReactMarkdown)`
  color: black;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 25px;
`;
