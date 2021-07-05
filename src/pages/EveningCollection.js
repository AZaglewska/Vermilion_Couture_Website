import React from "react";
import ProductList from "../components/ProductList.js/ProductList";
import { connect } from "react-redux";

const EveningCollection = ({ evening, currentLanguage }) => {
  return (
    <div>
      {currentLanguage === "PL" ? (
        <h1>Kolekcja Wieczorowa</h1>
      ) : (
        <h1>Evening Collection</h1>
      )}
      <ProductList corsetData={evening} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  evening: state.eveningCorset,
  currentLanguage: state.currentLanguage,
});
export default connect(mapStateToProps)(EveningCollection);
