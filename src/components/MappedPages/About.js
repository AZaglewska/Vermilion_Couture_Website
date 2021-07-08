import React from "react";
import Title from "../../atoms/Title";
import Text from "../../atoms/Text";
import {
  StyledAboutList,
  StyledAboutContainer,
  StyledAboutElements,
  StyledAboutImg,
  StyledTitleContainer,
  StyledLine,
} from "./MappedPagesStyles/AboutStyles";

const About = ({ designerData }) => {
  return (
    <div>
      <ul>
        {designerData.map((designerDataElement) => {
          const { id, name, images, articleFirst, articleSecond } =
            designerDataElement;

          return (
            <StyledAboutList key={id}>
              <StyledAboutContainer>
                <StyledAboutImg src={images[0]} />
                <StyledAboutElements>
                  <StyledTitleContainer>
                    <Title>{name}</Title>
                  </StyledTitleContainer>
                  <Text>{articleFirst}</Text>
                </StyledAboutElements>
              </StyledAboutContainer>
              <StyledLine />
              <StyledAboutContainer>
                <StyledAboutElements>
                  <Text>{articleSecond}</Text>
                </StyledAboutElements>
                <StyledAboutImg src={images[1]} />
              </StyledAboutContainer>
            </StyledAboutList>
          );
        })}
      </ul>
    </div>
  );
};

export default About;
