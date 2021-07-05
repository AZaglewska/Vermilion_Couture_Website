import React from "react";
import { connect } from "react-redux";

const WeddingCollection = ({ currentLanguage }) => {
  return (
    <div>
      {currentLanguage === "PL" ? (
        <h1>Kolekcja Ślubna</h1>
      ) : (
        <h1>Wedding Collection</h1>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentLanguage: state.currentLanguage,
});

export default connect(mapStateToProps)(WeddingCollection);
