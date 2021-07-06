import React from "react";
import { connect } from "react-redux";
import {
  StyledFooterContainer,
  StyledFooterElementsWrapper,
  StyledFooterIconContainer,
  StyledFooterElements,
  FooterLink,
  StyledFooterDesigner,
} from "./navigationStyles/FooterStyles.js";
import { footerLanguages } from "../../languages/languagesTypes";
import IconSvg from "../IconSvg/IconSvg";

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
        </StyledFooterElements>
        <StyledFooterElements>
          <h3>{footerLanguages[currentLanguage].links.title}</h3>
          {footerLanguages[currentLanguage].links.linksArray.map((link) => (
            <FooterLink to={link.route}>{link.name}</FooterLink>
          ))}
        </StyledFooterElements>
        <StyledFooterElements>
          <h3>Social media</h3>
          <StyledFooterIconContainer>
            <IconSvg />
          </StyledFooterIconContainer>
        </StyledFooterElements>
      </StyledFooterElementsWrapper>
      <StyledFooterDesigner>
        <p>© 2021 Vermilion Couture. All rights reserved</p>
        <p>Developed and powered by Ari-ann</p>
      </StyledFooterDesigner>
    </StyledFooterContainer>
  );
};

const mapStateToProps = (state) => ({
  currentLanguage: state.currentLanguage,
});

export default connect(mapStateToProps)(Footer);
