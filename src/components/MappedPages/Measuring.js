import React from "react";
import Title from "../../atoms/Title";
import Line from "../../atoms/Line";
import BackgroundBanner from "../../atoms/BackgroundBanner";
import backgroundImage from "../../assets/images/background/pexels-cottonbro-4614224.jpg";
import {
  StyledMeasuringList,
  StyledMeasuringElements,
  StyledMeasuringContent,
  StyledMeasuringImage,
  StyledReactMarkdown,
} from "./MappedPagesStyles/MeasuringStyles";

const Measuring = ({ measuringData, currentLanguage }) => {
  return (
    <StyledMeasuringList>
      <BackgroundBanner image={backgroundImage} />
      {measuringData.map((measuringDataElement) => {
        const { id, name, images, description } = measuringDataElement;

        return (
          <StyledMeasuringElements key={id}>
            <Title>{name}</Title>
            <Line />
            <StyledMeasuringContent>
              <StyledMeasuringImage src={images} />
              <StyledReactMarkdown>{description}</StyledReactMarkdown>
            </StyledMeasuringContent>
            <Line />
          </StyledMeasuringElements>
        );
      })}
    </StyledMeasuringList>
  );
};

export default Measuring;
