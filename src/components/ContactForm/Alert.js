import React from "react";
import { connect } from "react-redux";
import {
  StyledAlertWrapper,
  StyledAlert,
} from "./contactFormStyles/AlertStyles.js";

const Alert = (props) => {
  const { successAlert, errorAlert, currentLanguage } = props;
  return (
    <StyledAlertWrapper>
      {successAlert === "Success" ? (
        <StyledAlert>
          {currentLanguage === "PL"
            ? "Wiadomość została wysłana"
            : "The message was sent"}
        </StyledAlert>
      ) : null}
      {errorAlert === "Error" ? (
        <StyledAlert error>
          {currentLanguage === "PL"
            ? "Wiadomość nie została wysłana"
            : "The message wasn't sent"}
        </StyledAlert>
      ) : null}
    </StyledAlertWrapper>
  );
};

const mapStateToProps = (state) => ({
  currentLanguage: state.currentLanguage,
});

export default connect(mapStateToProps)(Alert);
