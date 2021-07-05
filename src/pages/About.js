import React from "react";
import { connect } from "react-redux";

const About = ({ currentLanguage }) => {
  return (
    <div>
      {currentLanguage === "PL" ? (
        <h1>O Vermilion</h1>
      ) : (
        <h1>About Vermilion</h1>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentLanguage: state.currentLanguage,
});

export default connect(mapStateToProps)(About);
