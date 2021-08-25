import styled from "styled-components";
import backgroundImage from "../../../assets/images/background/IMG_8950-Edit.jpg";
import { show } from "../../../globalStyles/Animations";

export const StyledQuestionsList = styled.ul`
  animation: ${show} 0.1s ease forwards;
  animation-duration: 3s;
`;

export const StyledQuestionsElement = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  list-style: none;
  margin: ${({ theme }) => theme.margins.xl} 0;
`;

export const StyledQuestionsBackground = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 90% 39%;
  height: 50vh;
  width: 100%;
`;
export const StyledQuestionsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
`;

export const StyledQuestion = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.l};
  color: ${({ theme }) => theme.colors.smokey};
  margin: ${({ theme }) => theme.margins.s} 0;
  margin-top: ${(props) => (props.first ? "30px" : "10px")};
`;
