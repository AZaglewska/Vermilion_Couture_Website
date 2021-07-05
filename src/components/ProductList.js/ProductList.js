import React from "react";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";

const ProductList = ({ corsetData }) => {
  return (
    <ul>
      {corsetData.map((corsetDataElement) => {
        const { id, name, images, price, priceSecond, description } =
          corsetDataElement;

        return (
          <li key={id}>
            <Link
              to={{
                pathname: `/product/${name.replace(/\s/g, "")}`,
                state: {
                  name,
                  images,
                  price,
                  priceSecond,
                  description,
                },
              }}
            >
              <div>
                <img src={images[0]} />
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductList;
