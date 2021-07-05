import React from "react";
import { connect } from "react-redux";

const OverbustCollection = ({ currentLanguage }) => {
  return (
    <div>
      {currentLanguage === "PL" ? (
        <h1>Kolekcja Gorsetów Overbust</h1>
      ) : (
        <h1>Overbust Corsets Collection</h1>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentLanguage: state.currentLanguage,
});

export default connect(mapStateToProps)(OverbustCollection);
