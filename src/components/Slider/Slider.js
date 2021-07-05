import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import imageOne from "../../assets/images/slider/IMG_8915-Edit.jpg";
import imageTwo from "../../assets/images/slider/IMG_2086-Edit.jpg";
import imageThree from "../../assets/images/slider/IMG_1948-Edit.jpg";
import imageFour from "../../assets/images/slider/IMG_8981-Edit.jpg";
import imageFive from "../../assets/images/slider/IMG_2402-Edit.jpg";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
  return (
    <div>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
      >
        <div data-src={imageOne} />
        <div data-src={imageTwo} />
        <div data-src={imageThree} />
        <div data-src={imageFour} />
        <div data-src={imageFive} />
      </AutoplaySlider>
    </div>
  );
};

export default Slider;
