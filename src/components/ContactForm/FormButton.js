import React from "react";
import { connect } from "react-redux";
import {
  ButtonSvg,
  LoadingSpinnerSvg,
  ShapeSvg,
  ShapeRectSvg,
  TextSvg,
  ArrowSvg,
} from "./contactFormStyles/FormButtonStyles";

const FormButton = (props) => {
  const { loadingAlert, currentLanguage } = props;
  return (
    <ButtonSvg>
      <>
        {loadingAlert ? (
          <LoadingSpinnerSvg viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              fill="none"
              stroke-width="2"
              r="17"
              stroke-dasharray="80.11061266653974 28.703537555513243"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="0.9900990099009901s"
                values="0 50 50;360 50 50"
                keyTimes="0;1"
              ></animateTransform>
            </circle>
          </LoadingSpinnerSvg>
        ) : (
          <>
            <ShapeSvg>
              <ShapeRectSvg />
            </ShapeSvg>
            <TextSvg>{currentLanguage === "PL" ? "Wyślij" : "Send"}</TextSvg>
            <ArrowSvg viewBox="0 0 490.8 490.8">
              <path
                d="M135.685,3.128c-4.237-4.093-10.99-3.975-15.083,0.262c-3.992,4.134-3.992,10.687,0,14.82
            l227.115,227.136L120.581,472.461c-4.237,4.093-4.354,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262
            c0.089-0.086,0.176-0.173,0.262-0.262l234.667-234.667c4.164-4.165,4.164-10.917,0-15.083L135.685,3.128z"
              />
              <path
                d="M128.133,490.68c-5.891,0.011-10.675-4.757-10.686-10.648c-0.005-2.84,1.123-5.565,3.134-7.571l227.136-227.115
            L120.581,18.232c-4.171-4.171-4.171-10.933,0-15.104c4.171-4.171,10.933-4.171,15.104,0l234.667,234.667
            c4.164,4.165,4.164,10.917,0,15.083L135.685,487.544C133.685,489.551,130.967,490.68,128.133,490.68z"
              />
            </ArrowSvg>
          </>
        )}
      </>
    </ButtonSvg>
  );
};

const mapStateToProps = (state) => ({
  currentLanguage: state.currentLanguage,
});

export default connect(mapStateToProps)(FormButton);
