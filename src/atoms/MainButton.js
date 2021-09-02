import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import { connect } from "react-redux";
import { lineAnimation } from "../globalStyles/Animations";

const StyledButtonContainer = styled.div`
  width: 270px;
  height: 60px;
`;

const StyledButtonLine = styled.div`
  border: none;
  border-bottom: 2px solid;
  border-color: ${({ theme }) => theme.colors.light};
  margin: 13px 0;
  opacity: 0;
  @media (max-width: 430px) {
    margin: 6px 0;
  }
`;

const StyledMainButton = styled.button`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 18px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border: none;
  position: relative;
  background-color: ${({ theme }) => theme.colors.goldBeige};
  z-index: 5;
  @media (max-width: 540px) {
    width: 90%;
  }
  @media (max-width: 430px) {
    width: 70%;
    height: 45px;
    font-size: ${({ theme }) => theme.fontSizes.s};
    letter-spacing: 0;
  }

  @media (max-width: 320px) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }

  &:before {
    -webkit-transition: 0.5s all ease;
    transition: 0.5s all ease;
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    bottom: 0;
    opacity: 0;
    content: "";
    background-color: ${({ theme }) => theme.colors.buttonBeige};
    z-index: -1;
  }
  &:hover,
  &:focus {
    ${StyledButtonLine} {
      animation: ${lineAnimation} 0.1s ease forwards;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
    }
    &:before {
      -webkit-transition: 0.5s all ease;
      transition: 0.5s all ease;
      left: 0;
      right: 0;
      opacity: 1;
    }
  }
`;

const StyledButtonLink = styled(Link)`
  text-decoration: none;
`;

const StyledButtonElements = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButtonText = styled.p`
  color: ${({ theme }) => theme.colors.light};
  text-decoration: none;
  transition: 1s all ease;
  margin-right: ${({ theme }) => theme.margins.s};
`;

const StyledButtonIcon = styled.svg`
  fill: ${({ theme }) => theme.colors.light};
  width: 22px;
  height: 22px;
  transition: fill 1s;
  @media (max-width: 430px) {
    width: 18px;
  }
`;

const MainButton = ({ children, currentLanguage }) => {
  return (
    <StyledButtonContainer>
      <StyledButtonLink to={routes.contact}>
        <StyledMainButton>
          <StyledButtonLine />
          <StyledButtonElements>
            <StyledButtonText>
              {currentLanguage === "PL" ? "Napisz do nas" : "Contact us"}
            </StyledButtonText>
            <StyledButtonIcon viewBox="0 0 512 512">
              <path d="M461.913,83.478H50.087C22.467,83.478,0,105.974,0,133.565v244.87c0,27.622,22.498,50.087,50.087,50.087h411.826    c27.578,0,50.087-22.453,50.087-50.087v-244.87C512,105.984,489.543,83.478,461.913,83.478z M460.563,116.87    c-8.494,8.494-186.871,186.871-192.757,192.758c-6.527,6.526-17.085,6.526-23.612,0C238.303,303.735,59.927,125.36,51.437,116.87    H460.563z M33.391,377.085V146.046l115.519,115.519L33.391,377.085z M62.567,395.13l109.954-109.954l48.061,48.061    c19.526,19.528,51.304,19.529,70.834,0l48.061-48.061L449.432,395.13H62.567z M478.609,377.085L363.089,261.565l115.519-115.519    V377.085z" />
            </StyledButtonIcon>
          </StyledButtonElements>
          <StyledButtonLine />
        </StyledMainButton>
      </StyledButtonLink>
      {children}
    </StyledButtonContainer>
  );
};

const mapStateToProps = (state) => ({
  currentLanguage: state.currentLanguage,
});

export default connect(mapStateToProps)(MainButton);
