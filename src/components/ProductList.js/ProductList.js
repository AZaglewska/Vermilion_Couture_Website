import React from "react";
import ProductElement from "../ProductElement/ProductElement";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomDot from "../CarouselElements/CarouselCustomDot";
import {
  CustomLeftArrow,
  CustomRightArrow,
} from "../CarouselElements/CarouselCustomArrow";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 600,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 300,
  },
  mobile: {
    breakpoint: { max: 650, min: 0 },
    items: 1,
    paritialVisibilityGutter: 40,
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
      autoPlaySpeed={4000}
      customDot={<CustomDot />}
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
    >
      {corsetData.map((corsetDataElement) => {
        return <ProductElement corsetDataElement={corsetDataElement} />;
      })}
    </Carousel>
  );
};

export default ProductList;
