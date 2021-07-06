import React from "react";
import { Link } from "react-router-dom";
import {
  CarouselImage,
  CarouselElement,
  CarouselImgWrapper,
} from "./ProductElementStyles.js";

const ProductElement = ({
  corsetDataElement: { id, name, images, price, priceSecond, description },
}) => {
  return (
    <CarouselElement key={id}>
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
        <CarouselImgWrapper>
          <CarouselImage src={images[0]} />
        </CarouselImgWrapper>
      </Link>
    </CarouselElement>
  );
};

export default ProductElement;
