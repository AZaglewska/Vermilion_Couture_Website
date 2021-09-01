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

const EveningCollection = ({ evening, currentLanguage }) => {
  return (
    <CollectionContent>
      <CollectionWrapper>
        <CollectionElements>
          <Title>
            {currentLanguage === "PL"
              ? "Kolekcja Wieczorowa"
              : "Evening Collection"}
          </Title>
          <Line />
        </CollectionElements>
      </CollectionWrapper>
      <ProductList corsetData={evening} />
      <CollectionWrapper>
        <CollectionElements>
          <Line />
        </CollectionElements>
      </CollectionWrapper>
    </CollectionContent>
  );
};

const mapStateToProps = (state) => ({
  evening: state.eveningCorset,
  currentLanguage: state.currentLanguage,
});
export default connect(mapStateToProps)(EveningCollection);
