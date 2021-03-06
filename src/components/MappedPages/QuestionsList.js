import React from "react";
import Title from "../../atoms/Title";
import Text from "../../atoms/Text";
import Line from "../../atoms/Line";
import BackgroundBanner from "../../atoms/BackgroundBanner";
import backgroundImage from "../../assets/images/background/IMG_8950-Edit.jpg";
import {
  StyledQuestionsList,
  StyledQuestionsElement,
  StyledQuestionsContent,
  StyledQuestion,
} from "./MappedPagesStyles/QuestionsListStyles";

const QuestionsList = ({ questionsAndAnswersData }) => {
  return (
    <StyledQuestionsList>
      <BackgroundBanner image={backgroundImage} />
      {questionsAndAnswersData.map((questionsAndAnswersElement) => {
        const {
          id,
          name,
          questions,
          articleFirst,
          articleSecond,
          articleThird,
          articleFourth,
          articleFifth,
          articleSixth,
          articleSeventh,
          articleEighth,
        } = questionsAndAnswersElement;

        return (
          <StyledQuestionsElement key={id}>
            <Title>{name}</Title>
            <StyledQuestionsContent>
              <Line />
              <StyledQuestion first>{questions[0]}</StyledQuestion>
              <Text>{articleFirst}</Text>
              <StyledQuestion>{questions[1]}</StyledQuestion>
              <Text>{articleSecond}</Text>
              <StyledQuestion>{questions[2]}</StyledQuestion>
              <Text>{articleThird}</Text>
              <StyledQuestion>{questions[3]}</StyledQuestion>
              <Text>{articleFourth}</Text>
              <StyledQuestion>{questions[4]}</StyledQuestion>
              <Text>{articleFifth}</Text>
              <StyledQuestion>{questions[5]}</StyledQuestion>
              <Text>{articleSixth}</Text>
              <StyledQuestion>{questions[6]}</StyledQuestion>
              <Text>{articleSeventh}</Text>
              <StyledQuestion>{questions[7]}</StyledQuestion>
              <Text>{articleEighth}</Text>
              <Line second />
            </StyledQuestionsContent>
          </StyledQuestionsElement>
        );
      })}
    </StyledQuestionsList>
  );
};

export default QuestionsList;
