import React from "react";
import IconList from "../IconComponents/IconList/IconList";
import AriAnnLogo from "../../assets/logo/AriAnnLogo.svg";
import { footerLanguages } from "../../languages/languagesTypes";
import { connect } from "react-redux";
import { routes } from "../../routes";
import {
  StyledFooterContainer,
  StyledFooterElementsWrapper,
  StyledFooterContactWrapper,
  StyledFooterContactLink,
  StyledFooterIconContainer,
  StyledFooterElements,
  FooterLink,
  StyledFooterDesigner,
} from "./navigationStyles/FooterStyles.js";

const Footer = ({ currentLanguage }) => {
  return (
    <StyledFooterContainer>
      <StyledFooterElementsWrapper>
        <StyledFooterElements>
          <h3>{footerLanguages[currentLanguage].contact.title}</h3>
          {footerLanguages[currentLanguage].contact.content.map(
            (item, index) => (
              <p key={index}>{item}</p>
            )
          )}
          <StyledFooterContactWrapper>
            <StyledFooterContactLink to={routes.contact}>
              <svg viewBox="0 0 512 512">
                <path d="M461.913,83.478H50.087C22.467,83.478,0,105.974,0,133.565v244.87c0,27.622,22.498,50.087,50.087,50.087h411.826    c27.578,0,50.087-22.453,50.087-50.087v-244.87C512,105.984,489.543,83.478,461.913,83.478z M460.563,116.87    c-8.494,8.494-186.871,186.871-192.757,192.758c-6.527,6.526-17.085,6.526-23.612,0C238.303,303.735,59.927,125.36,51.437,116.87    H460.563z M33.391,377.085V146.046l115.519,115.519L33.391,377.085z M62.567,395.13l109.954-109.954l48.061,48.061    c19.526,19.528,51.304,19.529,70.834,0l48.061-48.061L449.432,395.13H62.567z M478.609,377.085L363.089,261.565l115.519-115.519    V377.085z" />
              </svg>
              {currentLanguage === "PL" ? "Napisz do nas" : "Contact us"}
            </StyledFooterContactLink>
          </StyledFooterContactWrapper>
        </StyledFooterElements>
        <StyledFooterElements>
          <h3>{footerLanguages[currentLanguage].links.title}</h3>
          {footerLanguages[currentLanguage].links.linksArray.map(
            (link, index) => (
              <FooterLink to={link.route} key={index}>
                {link.name}
              </FooterLink>
            )
          )}
        </StyledFooterElements>
        <StyledFooterElements>
          <h3>Social media</h3>
          <StyledFooterIconContainer>
            <IconList footer />
          </StyledFooterIconContainer>
        </StyledFooterElements>
      </StyledFooterElementsWrapper>
      <StyledFooterDesigner>
        <p>?? 2021 Vermilion Couture. All rights reserved</p>
        <p>Developed and powered by</p>{" "}
        <a href="https://ariann.netlify.app/" target="_blank" rel="noreferrer">
          <img src={AriAnnLogo} alt="Logo" />
        </a>
      </StyledFooterDesigner>
    </StyledFooterContainer>
  );
};

const mapStateToProps = (state) => ({
  currentLanguage: state.currentLanguage,
});

export default connect(mapStateToProps)(Footer);
