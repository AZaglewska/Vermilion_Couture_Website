import React from "react";
import Title from "../../atoms/Title";
import Text from "../../atoms/Text";
import Line from "../../atoms/Line";
import Image from "../../atoms/Image";
import {
  StyledAboutList,
  StyledAboutContainer,
  StyledAboutElements,
  StyledTitleContainer,
} from "./MappedPagesStyles/AboutStyles";

const About = ({ designerData }) => {
  return (
    <div>
      <ul>
        {designerData.map((designerDataElement) => {
          const {
            id,
            name,
            nameSecond,
            images,
            articleFirst,
            articleSecond,
            articleThird,
            articleFourth,
            articleFifth,
            articleSixth,
          } = designerDataElement;

          return (
            <StyledAboutList key={id}>
              <StyledAboutContainer>
                <Image styleType="about" src={images[0]} alt={name} logo />
                <StyledAboutElements>
                  <StyledTitleContainer>
                    <Title>{name}</Title>
                  </StyledTitleContainer>
                  <Text>{articleFirst}</Text>
                  <Text marginTop>{articleSecond}</Text>
                </StyledAboutElements>
              </StyledAboutContainer>
              <Line styleType="about" />
              <StyledAboutContainer>
                <StyledAboutElements>
                  <StyledTitleContainer>
                    <Title>{nameSecond[0]}</Title>
                  </StyledTitleContainer>
                  <Text>{articleThird}</Text>
                  <Text marginTop>{articleFourth}</Text>
                  <Text marginTop>{articleFifth}</Text>
                </StyledAboutElements>
                <Image styleType="about" src={images[1]} alt={name} designer />
              </StyledAboutContainer>
              <Line styleType="about" />
              <StyledAboutContainer>
                <Image styleType="about" src={images[2]} alt={name} />
                <StyledAboutElements>
                  <StyledTitleContainer>
                    <Title>{nameSecond[1]}</Title>
                  </StyledTitleContainer>
                  <Text>{articleSixth}</Text>
                </StyledAboutElements>
              </StyledAboutContainer>
            </StyledAboutList>
          );
        })}
      </ul>
    </div>
  );
};

export default About;
