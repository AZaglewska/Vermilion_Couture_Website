import React from "react";
import { Link } from "react-router-dom";

const ProductElement = ({
  corsetDataElement: { name, images, price, priceSecond, description },
}) => {
  return (
    <div>
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
        <img src={images[0]} />
      </Link>
    </div>
  );
};

export default ProductElement;
