import React from "react";
import Title from "../../atoms/Title";
import Text from "../../atoms/Text";
import Line from "../../atoms/Line";
import {
  AboutCollectionList,
  AboutCollectionWrapper,
  AboutCollectionImg,
  AboutCollectionElements,
  AboutCollectionTitle,
  AboutCollectionLine,
} from "./MappedPagesStyles/AboutCollectionStyles";

const AboutCollection = ({ aboutCollectionData }) => {
  return (
    <>
      <ul>
        {aboutCollectionData.map((aboutCollectionDataElement) => {
          const {
            id,
            name,
            images,
            articleFirst,
            articleSecond,
            articleThird,
          } = aboutCollectionDataElement;

          return (
            <AboutCollectionList key={id}>
              <AboutCollectionWrapper>
                <AboutCollectionImg src={images[0]} />
                <AboutCollectionElements>
                  <AboutCollectionTitle>
                    <Title>{name}</Title>
                    <Line />
                  </AboutCollectionTitle>
                  <Text>{articleFirst}</Text>
                </AboutCollectionElements>
              </AboutCollectionWrapper>
              <AboutCollectionLine>
                <Line />
              </AboutCollectionLine>
              <AboutCollectionWrapper second>
                <AboutCollectionElements>
                  <Text>{articleSecond}</Text>
                </AboutCollectionElements>
                <AboutCollectionImg src={images[1]} />
              </AboutCollectionWrapper>
              <AboutCollectionLine>
                <Line />
              </AboutCollectionLine>
              <AboutCollectionWrapper>
                <AboutCollectionImg src={images[2]} />
                <AboutCollectionElements>
                  <Text>{articleThird}</Text>
                </AboutCollectionElements>
              </AboutCollectionWrapper>
              <AboutCollectionLine>
                <Line />
              </AboutCollectionLine>
            </AboutCollectionList>
          );
        })}
      </ul>
    </>
  );
};

export default AboutCollection;
