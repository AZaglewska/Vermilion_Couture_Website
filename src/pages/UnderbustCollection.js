import React from "react";
import { connect } from "react-redux";

const UnderbustCollection = ({ currentLanguage }) => {
  return (
    <div>
      {currentLanguage === "PL" ? (
        <h1>Kolekcja Gorsetów Underbust</h1>
      ) : (
        <h1>Underbust Corsets Collection</h1>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentLanguage: state.currentLanguage,
});

export default connect(mapStateToProps)(UnderbustCollection);
