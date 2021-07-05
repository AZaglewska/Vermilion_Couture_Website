import React from "react";
import { connect } from "react-redux";

const EveningCollection = ({ currentLanguage }) => {
  return (
    <div>
      {currentLanguage === "PL" ? (
        <h1>Kolekcja Wieczorowa</h1>
      ) : (
        <h1>Evening Collection</h1>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentLanguage: state.currentLanguage,
});
export default connect(mapStateToProps)(EveningCollection);
