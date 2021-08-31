import React from "react";
import imageOne from "../../assets/images/slider/IMG_8911-Edit.jpg";
import imageTwo from "../../assets/images/slider/IMG_1948-Edit.jpg";
import imageThree from "../../assets/images/slider/IMG_8981-Edit.jpg";
import imageFour from "../../assets/images/slider/IMG_2402-Edit.jpg";
import "react-awesome-slider/dist/styles.css";

import { StyledSlider } from "./SliderStyles";

const Slider = () => {
  return (
    <>
      <StyledSlider
        play={true}
        cancelOnInteraction={false}
        interval={6000}
        mobileTouch={true}
      >
        <div data-src={imageOne} />
        <div data-src={imageTwo} />
        <div data-src={imageThree} />
        <div data-src={imageFour} />
      </StyledSlider>
    </>
  );
};

export default Slider;
