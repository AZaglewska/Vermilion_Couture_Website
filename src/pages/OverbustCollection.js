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

const OverbustCollection = ({ overbust, currentLanguage }) => {
  return (
    <CollectionContent>
      <CollectionWrapper>
        <CollectionElements>
          <Title>
            {currentLanguage === "PL"
              ? "Kolekcja Gorsetów Overbust"
              : "Overbust Corsets Collection"}
          </Title>
          <Line />
        </CollectionElements>
      </CollectionWrapper>
      <ProductList corsetData={overbust} />
      <CollectionWrapper>
        <CollectionElements>
          <Line />
        </CollectionElements>
      </CollectionWrapper>
    </CollectionContent>
  );
};

const mapStateToProps = (state) => ({
  overbust: state.overbustCorset,
  currentLanguage: state.currentLanguage,
});

export default connect(mapStateToProps)(OverbustCollection);
