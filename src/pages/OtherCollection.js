import React from "react";
import ProductList from "../components/ProductList.js/ProductList";
import { connect } from "react-redux";

const OtherCollection = ({ other, currentLanguage }) => {
  return (
    <div>
      {currentLanguage === "PL" ? (
        <h1>Kolekcja Inne</h1>
      ) : (
        <h1>Other Collection</h1>
      )}
      <ProductList corsetData={other} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  other: state.otherCorset,
  currentLanguage: state.currentLanguage,
});

export default connect(mapStateToProps)(OtherCollection);
