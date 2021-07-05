import React from "react";
import { connect } from "react-redux";

const Contact = ({ currentLanguage }) => {
  return (
    <div>{currentLanguage === "PL" ? <h1>Kontakt</h1> : <h1>Contact</h1>}</div>
  );
};

const mapStateToProps = (state) => ({
  currentLanguage: state.currentLanguage,
});

export default connect(mapStateToProps)(Contact);
