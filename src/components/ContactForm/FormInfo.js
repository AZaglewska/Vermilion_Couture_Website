import React from "react";
import { connect } from "react-redux";
import { routes } from "../../routes";
import {
  StyledFormText,
  StyledFormTextLink,
} from "./contactFormStyles/FormInfoStyles";

const FormInfo = ({ currentLanguage }) => {
  return (
    <>
      {currentLanguage === "PL" ? (
        <StyledFormText>
          *Administratorem danych przekazanych w korespondencji e-mail jest
          Vermilion Couture Katarzyna Borychowska. Więcej informacji na temat
          przetwarzania danych znajdziesz w{" "}
          <StyledFormTextLink to={routes.privacyPolicyPL}>
            Polityce Prywatności
          </StyledFormTextLink>{" "}
          zamieszczonej na tej stronie.
        </StyledFormText>
      ) : (
        <StyledFormText>
          *The administrator of the data provided during the e-mail
          correspondence is Vermilion Couture Katarzyna Borychowska. More
          information on data processing can be found in the{" "}
          <StyledFormTextLink to={routes.privacyPolicyENG}>
            Privacy Policy
          </StyledFormTextLink>{" "}
          posted on my website.
        </StyledFormText>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  currentLanguage: state.currentLanguage,
});

export default connect(mapStateToProps)(FormInfo);
