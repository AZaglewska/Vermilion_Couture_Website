import React from "react";
import ProductElement from "../ProductElement/ProductElement";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";

const ProductList = ({ corsetData }) => {
  return (
    <ul>
      {corsetData.map((corsetDataElement) => {
        return <ProductElement corsetDataElement={corsetDataElement} />;
      })}
    </ul>
  );
};

export default ProductList;
