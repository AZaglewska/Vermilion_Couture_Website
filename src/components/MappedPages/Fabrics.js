import React from "react";
import Title from "../../atoms/Title";
import Text from "../../atoms/Text";
import Line from "../../atoms/Line";
import BackgroundBanner from "../../atoms/BackgroundBanner";
import backgroundImage from "../../assets/images/background/pexels-cottonbro-4614231.jpg";
import {
  StyledFabricsWrapper,
  StyledFabricsContent,
  StyledFabricsListGrid,
  StyledFabricsElement,
  StyledFabricsImage,
  StyledFabricsName,
} from "./MappedPagesStyles/FabricsStyles";

const Fabrics = ({ fabricsData, currentLanguage }) => {
  return (
    <StyledFabricsWrapper>
      <BackgroundBanner image={backgroundImage} />
      <StyledFabricsContent>
        <Title> {currentLanguage === "PL" ? "Tkaniny" : "Fabrics"} </Title>
        <Line />
        <Text styleType="biggerText">
          {currentLanguage === "PL"
            ? "Poniżej przedstawiamy Wam najpopularniejsze tkaniny z których chętnie uszyjemy Wam wymarzony gorset:"
            : "Below we present the most popular fabrics, that we are happy to sew your dream corset from:"}
        </Text>
        <StyledFabricsListGrid>
          {fabricsData.map((fabricsDataElement) => {
            const { id, name, images, description } = fabricsDataElement;
            return (
              <StyledFabricsElement key={id}>
                <StyledFabricsName>{name}</StyledFabricsName>
                <Line styleType="greyLine" />
                <StyledFabricsImage src={images} />
                <Text>{description}</Text>
              </StyledFabricsElement>
            );
          })}
        </StyledFabricsListGrid>
        <Line second />
      </StyledFabricsContent>
    </StyledFabricsWrapper>
  );
};

export default Fabrics;
