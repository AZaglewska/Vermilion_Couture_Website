import React from "react";
import Title from "../atoms/Title";
import Line from "../atoms/Line";
import ProductList from "../components/ProductList.js/ProductList";
import { connect } from "react-redux";
import {
  CollectionContent,
  CollectionWrapper,
  CollectionElements,
} from "./pagesStyles/CollectionStyles";

const WeddingCollection = ({ wedding, currentLanguage }) => {
  return (
    <CollectionContent>
      <CollectionWrapper>
        <CollectionElements>
          <Title>
            {currentLanguage === "PL"
              ? "Kolekcja Ślubna"
              : "Wedding Collection"}
          </Title>
          <Line />
        </CollectionElements>
      </CollectionWrapper>
      <ProductList corsetData={wedding} />
      <CollectionWrapper>
        <CollectionElements>
          <Line />
        </CollectionElements>
      </CollectionWrapper>
    </CollectionContent>
  );
};

const mapStateToProps = (state) => ({
  wedding: state.weddingCorset,
  currentLanguage: state.currentLanguage,
});

export default connect(mapStateToProps)(WeddingCollection);
