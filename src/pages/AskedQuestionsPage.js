import React from "react";
import QuestionsList from "../components/MappedPages/QuestionsList";
import { connect } from "react-redux";

const AskedQuestionsPage = ({ questionsAndAnswersData }) => {
  return (
    <>
      <QuestionsList questionsAndAnswersData={questionsAndAnswersData} />
    </>
  );
};

const mapStateToProps = (state) => ({
  questionsAndAnswersData: state.questionsAndAnswersData,
});

export default connect(mapStateToProps)(AskedQuestionsPage);
