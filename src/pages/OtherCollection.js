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

const OtherCollection = ({ other, currentLanguage }) => {
  return (
    <CollectionContent>
      <CollectionWrapper>
        <CollectionElements>
          <Title>
            {currentLanguage === "PL" ? "Kolekcja Inne" : "Other Collection"}
          </Title>
          <Line />
        </CollectionElements>
      </CollectionWrapper>
      <ProductList corsetData={other} />
      <CollectionWrapper>
        <CollectionElements>
          <Line />
        </CollectionElements>
      </CollectionWrapper>
    </CollectionContent>
  );
};

const mapStateToProps = (state) => ({
  other: state.otherCorset,
  currentLanguage: state.currentLanguage,
});

export default connect(mapStateToProps)(OtherCollection);
