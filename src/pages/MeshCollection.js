import React from "react";
import ProductList from "../components/ProductList.js/ProductList";
import { connect } from "react-redux";

const MeshCollection = ({ mesh, currentLanguage }) => {
  return (
    <div>
      {currentLanguage === "PL" ? (
        <h1>Kolekcja Transparentna</h1>
      ) : (
        <h1>Mesh Collection</h1>
      )}
      <ProductList corsetData={mesh} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  mesh: state.meshCorset,
  currentLanguage: state.currentLanguage,
});

export default connect(mapStateToProps)(MeshCollection);
