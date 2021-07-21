import React from "react";
import ProductList from "../components/ProductList.js/ProductList";
import { connect } from "react-redux";

const SilkCollection = ({ silk, currentLanguage }) => {
  return (
    <div>
      {currentLanguage === "PL" ? (
        <h1>Kolekcja Jedwabna</h1>
      ) : (
        <h1>Silk Collection</h1>
      )}
      <ProductList corsetData={silk} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  silk: state.silkCorset,
  currentLanguage: state.currentLanguage,
});

export default connect(mapStateToProps)(SilkCollection);
