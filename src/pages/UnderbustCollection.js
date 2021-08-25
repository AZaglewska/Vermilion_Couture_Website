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

const UnderbustCollection = ({ currentLanguage, underbust }) => {
  return (
    <CollectionContent>
      <CollectionWrapper>
        <CollectionElements>
          <Title>
            {currentLanguage === "PL"
              ? "Kolekcja Gorsetów Underbust"
              : "Underbust Corsets Collection"}
          </Title>
          <Line />
        </CollectionElements>
      </CollectionWrapper>
      <ProductList corsetData={underbust} />
      <CollectionWrapper>
        <CollectionElements>
          <Line />
        </CollectionElements>
      </CollectionWrapper>
    </CollectionContent>
  );
};

const mapStateToProps = (state) => ({
  underbust: state.underbustCorset,
  currentLanguage: state.currentLanguage,
});

export default connect(mapStateToProps)(UnderbustCollection);
