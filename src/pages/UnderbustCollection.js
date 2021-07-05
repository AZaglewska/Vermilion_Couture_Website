import React from "react";
import ProductList from "../components/ProductList.js/ProductList";
import { connect } from "react-redux";

const UnderbustCollection = ({ currentLanguage, underbust }) => {
  return (
    <div>
      {currentLanguage === "PL" ? (
        <h1>Kolekcja Gorsetów Underbust</h1>
      ) : (
        <h1>Underbust Corsets Collection</h1>
      )}
      <ProductList corsetData={underbust} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  underbust: state.underbustCorset,
  currentLanguage: state.currentLanguage,
});

export default connect(mapStateToProps)(UnderbustCollection);
