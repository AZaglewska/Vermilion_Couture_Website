import React from "react";
import ProductList from "../components/ProductList.js/ProductList";
import { connect } from "react-redux";

const OverbustCollection = ({ overbust, currentLanguage }) => {
  return (
    <div>
      {currentLanguage === "PL" ? (
        <h1>Kolekcja Gorsetów Overbust</h1>
      ) : (
        <h1>Overbust Corsets Collection</h1>
      )}
      <ProductList corsetData={overbust} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  overbust: state.overbustCorset,
  currentLanguage: state.currentLanguage,
});

export default connect(mapStateToProps)(OverbustCollection);
