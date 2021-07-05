import React from "react";
import { connect } from "react-redux";

const Publications = ({ currentLanguage }) => {
  return (
    <div>
      {currentLanguage === "PL" ? <h1>Publikacje</h1> : <h1>Publications</h1>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentLanguage: state.currentLanguage,
});

export default connect(mapStateToProps)(Publications);
