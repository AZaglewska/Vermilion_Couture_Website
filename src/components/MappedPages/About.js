import React from "react";
import Title from "../../atoms/Title";
import Text from "../../atoms/Text";
import Line from "../../atoms/Line";
import Image from "../../atoms/Image";
import {
  StyledAboutList,
  StyledAboutContainer,
  StyledAboutContent,
  StyledAboutTitleWrapper,
  StyledAboutElements,
  StyledAboutTextContainer,
} from "./MappedPagesStyles/AboutStyles";

const About = ({ designerData }) => {
  return (
    <>
      <ul>
        {designerData.map((designerDataElement) => {
          const {
            id,
            name,
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
                <StyledAboutContent>
                  <Image src={images[0]} alt={name} />
                  <StyledAboutTextContainer>
                    <StyledAboutTitleWrapper>
                      <Title>{name}</Title>
                      <Line />
                    </StyledAboutTitleWrapper>
                    <Text styleType="about">{articleFirst}</Text>
                    <Text styleType="about" marginTop>
                      {articleSecond}
                    </Text>
                  </StyledAboutTextContainer>
                </StyledAboutContent>
              </StyledAboutContainer>
              <StyledAboutContainer>
                <StyledAboutElements>
                  <Line />
                </StyledAboutElements>
                <StyledAboutContent second>
                  <StyledAboutTextContainer>
                    <Text styleType="about">{articleThird}</Text>
                    <Text styleType="about" marginTop>
                      {articleFourth}
                    </Text>
                    <Text styleType="about" marginTop>
                      {articleFifth}
                    </Text>
                  </StyledAboutTextContainer>
                  <Image styleType="about" src={images[1]} alt={name} />
                </StyledAboutContent>
              </StyledAboutContainer>
              <StyledAboutContainer>
                <StyledAboutElements>
                  <Line />
                </StyledAboutElements>
                <StyledAboutContent third>
                  <Image styleType="about" src={images[2]} alt={name} />
                  <StyledAboutTextContainer>
                    <Text styleType="about">{articleSixth}</Text>
                  </StyledAboutTextContainer>
                </StyledAboutContent>
                <StyledAboutElements>
                  <Line />
                </StyledAboutElements>
              </StyledAboutContainer>
            </StyledAboutList>
          );
        })}
      </ul>
    </>
  );
};

export default About;
