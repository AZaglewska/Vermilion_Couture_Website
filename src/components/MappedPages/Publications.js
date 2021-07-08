import React from "react";
import Title from "../../atoms/Title";
import Text from "../../atoms/Text";
import Line from "../../atoms/Line";
import {
  StyledPublicationsList,
  StyledPublicationsElements,
  StyledTitleContainer,
  StyledPublicationsContainer,
  StyledPublicationsImg,
} from "./MappedPagesStyles/PublicationsStyles";

const Publications = ({ publicationsData }) => {
  return (
    <>
      <ul>
        {publicationsData.map((publicationsDataElement) => {
          const {
            id,
            name,
            images,
            articleFirst,
            articleSecond,
            articleThird,
          } = publicationsDataElement;

          return (
            <StyledPublicationsList key={id}>
              <StyledPublicationsContainer>
                <StyledPublicationsImg src={images[0]} />
                <StyledPublicationsElements>
                  <StyledTitleContainer>
                    <Title>{name}</Title>
                  </StyledTitleContainer>
                  <Text>{articleFirst}</Text>
                </StyledPublicationsElements>
              </StyledPublicationsContainer>
              <Line styleType="publications" />
              <StyledPublicationsContainer>
                <StyledPublicationsElements>
                  <Text>{articleSecond}</Text>
                </StyledPublicationsElements>
                <StyledPublicationsImg src={images[1]} />
              </StyledPublicationsContainer>
              <Line styleType="publications" />
              <StyledPublicationsContainer>
                <StyledPublicationsImg src={images[2]} />
                <StyledPublicationsElements>
                  <Text>{articleThird}</Text>
                </StyledPublicationsElements>
              </StyledPublicationsContainer>
            </StyledPublicationsList>
          );
        })}
      </ul>
    </>
  );
};

export default Publications;
