import React from "react";
import Title from "../atoms/Title";
import Line from "../atoms/Line";
import {
  CollectionContent,
  CollectionWrapper,
  CollectionElements,
} from "./pagesStyles/CollectionStyles";
import ProductList from "../components/ProductList.js/ProductList";
import { connect } from "react-redux";

const MeshCollection = ({ mesh, currentLanguage }) => {
  return (
    <CollectionContent>
      <CollectionWrapper>
        <CollectionElements>
          <Title>
            {currentLanguage === "PL"
              ? "Kolekcja Transparentna"
              : "Mesh Collection"}
          </Title>
          <Line />
        </CollectionElements>
      </CollectionWrapper>
      <ProductList corsetData={mesh} />
      <CollectionWrapper>
        <CollectionElements>
          <Line />
        </CollectionElements>
      </CollectionWrapper>
    </CollectionContent>
  );
};

const mapStateToProps = (state) => ({
  mesh: state.meshCorset,
  currentLanguage: state.currentLanguage,
});

export default connect(mapStateToProps)(MeshCollection);
