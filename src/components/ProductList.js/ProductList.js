import React from "react";
import ProductElement from "../ProductElement/ProductElement";
import Carousel from "react-multi-carousel";
import CustomDot from "./CarouselElements/CarouselCustomDot";
import {
  CustomLeftArrow,
  CustomRightArrow,
} from "./CarouselElements/CarouselCustomArrow";
import { ProductCarouselList } from "./ProductListStyles";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  mediumDesktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1200, min: 800 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ProductList = ({ corsetData, deviceType }) => {
  return (
    <Carousel
      deviceType={deviceType}
      responsive={responsive}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      showDots={true}
      arrows
      infinite={true}
      autoPlay={deviceType !== "mobile" ? true : false}
      autoPlaySpeed={5000}
      customDot={<CustomDot />}
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
    >
      {corsetData.map((corsetDataElement, index) => {
        return (
          <ProductCarouselList key={index}>
            <ProductElement corsetDataElement={corsetDataElement} />
          </ProductCarouselList>
        );
      })}
    </Carousel>
  );
};

export default ProductList;
