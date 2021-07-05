import React from "react";
import ProductList from "../components/ProductList.js/ProductList";
import { connect } from "react-redux";

const WeddingCollection = ({ wedding, currentLanguage }) => {
  return (
    <div>
      {currentLanguage === "PL" ? (
        <h1>Kolekcja Ślubna</h1>
      ) : (
        <h1>Wedding Collection</h1>
      )}
      <ProductList corsetData={wedding} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  wedding: state.weddingCorset,
  currentLanguage: state.currentLanguage,
});

export default connect(mapStateToProps)(WeddingCollection);
