import React from "react";
import Title from "../../atoms/Title";
import Line from "../../atoms/Line";
import Text from "../../atoms/Text";
import {
  StyledMeasuringList,
  StyledMeasuringBackground,
  StyledMeasuringElements,
  StyledMeasuringContent,
  StyledMeasuringImage,
  StyledReactMarkdown,
} from "./MappedPagesStyles/MeasuringStyles";

const Measuring = ({ measuringData, currentLanguage }) => {
  return (
    <StyledMeasuringList>
      <StyledMeasuringBackground />
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
