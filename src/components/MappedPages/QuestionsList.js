import React from "react";

const QuestionsList = ({ questionsAndAnswersData }) => {
  return (
    <div>
      <ul>
        {questionsAndAnswersData.map((questionsAndAnswersElement) => {
          const {
            id,
            name,
            questions,
            images,
            articleFirst,
            articleSecond,
            articleThird,
          } = questionsAndAnswersElement;

          return (
            <li key={id}>
              <img src={images} />
              <h1>{name}</h1>
              <h2>{questions[0]}</h2>
              <p>{articleFirst}</p>
              <h2>{questions[1]}</h2>
              <p>{articleSecond}</p>
              <h2>{questions[2]}</h2>
              <p>{articleThird}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default QuestionsList;
