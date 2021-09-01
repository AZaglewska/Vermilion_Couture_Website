import React, { useState } from "react";
import FormInfo from "./FormInfo";
import FormButton from "./FormButton";
import Title from "../../atoms/Title";
import HeartIcon from "../IconComponents/HeartIcon/HeartIcon";
import Alert from "./Alert";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { connect } from "react-redux";
import { Formik, ErrorMessage } from "formik";
import {
  StyledFormWrapper,
  StyledContactImage,
  StyledForm,
  StyledFormElementsWrapper,
  StyledFormElements,
  StyledField,
  StyledLabel,
  StyledSpan,
  StyledError,
  StyledContactElements,
  StyledCheckboxWrapper,
  StyledCheckboxElements,
  StyledCheckbox,
  StyledCheckboxLabel,
} from "./contactFormStyles/ContactFormStyles";

const ContactForm = ({ currentLanguage }) => {
  const [successAlert, setSuccessAlert] = useState("");
  const [loadingAlert, setLoadingAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState("");

  const ValidationSchema = Yup.object().shape({
    name: Yup.string()
      .required(
        currentLanguage === "PL"
          ? "Polę imię jest wymagane"
          : "The field is required"
      )
      .trim(),
    email: Yup.string()
      .required(
        currentLanguage === "PL"
          ? "Pole email jest wymagane"
          : "The field is required"
      )
      .email(
        currentLanguage === "PL"
          ? "Proszę wpisać poprawny adres email"
          : "Please enter a valid email address"
      ),

    subject: Yup.string().required(
      currentLanguage === "PL"
        ? "Pole temat jest wymagane"
        : "The field is required"
    ),

    message: Yup.string()
      .required(
        currentLanguage === "PL"
          ? "Pole wiadomość jest wymagane"
          : "The field is required"
      )
      .min(
        10,
        currentLanguage === "PL"
          ? "Wiadomość za krótka"
          : "The message is too short"
      ),

    acceptTerms: Yup.bool().oneOf(
      [true],
      currentLanguage === "PL"
        ? "Proszę zaakceptować politykę prywatności"
        : "The field is required"
    ),
  });

  return (
    <StyledFormWrapper>
      <StyledContactImage />
      <Formik
        initialValues={{
          name: "",
          email: "",
          subject: "",
          message: "",
          acceptTerms: false,
        }}
        validationSchema={ValidationSchema}
        onSubmit={(values, { resetForm }, e) => {
          console.log(values);
          setLoadingAlert(true);

          emailjs
            .send(
              process.env.REACT_APP_EMAILJS_SERVICE,
              process.env.REACT_APP_EMAILJS_TEMPLATE,
              values,
              process.env.REACT_APP_EMAILJS_USER
            )
            .then((result) => {
              console.log(result.text);
              setSuccessAlert("Success");
              setLoadingAlert(false);
              resetForm();
            })
            .then(() => {
              setTimeout(() => {
                setSuccessAlert("");
              }, 4000);
            })
            .catch((error) => {
              console.log(error.text);
              setErrorAlert("Error");
            });
        }}
      >
        {({ values, handleChange, handleBlur, isSubmitting }) => {
          return (
            <StyledForm>
              <Title styleType="form">
                {currentLanguage === "PL"
                  ? "Napisz do nas"
                  : "We'd love to hear from you"}
              </Title>
              <StyledFormElementsWrapper first>
                <StyledFormElements first>
                  <StyledLabel htmlFor="name">
                    {currentLanguage === "PL" ? "Imię" : "Name"}
                  </StyledLabel>
                  <StyledField
                    type="text"
                    name="name"
                    placeholder={
                      currentLanguage === "PL"
                        ? "Wpisz swoje imię"
                        : "Enter your name"
                    }
                    id="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  <StyledSpan />
                  <StyledError>
                    <ErrorMessage name="name" />
                  </StyledError>
                </StyledFormElements>
                <StyledFormElements first>
                  <StyledLabel htmlFor="email">Email</StyledLabel>
                  <StyledField
                    type="email"
                    name="email"
                    placeholder={
                      currentLanguage === "PL"
                        ? "Wpisz swój email"
                        : "Enter your email"
                    }
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <StyledSpan />
                  <StyledError>
                    <ErrorMessage name="email" />
                  </StyledError>
                </StyledFormElements>
              </StyledFormElementsWrapper>
              <StyledFormElementsWrapper second>
                <StyledFormElements>
                  <StyledLabel htmlFor="subject">
                    {currentLanguage === "PL" ? "Temat" : "Subject"}
                  </StyledLabel>
                  <StyledField
                    type="subject"
                    name="subject"
                    placeholder={
                      currentLanguage === "PL"
                        ? "Wpisz temat wiadomości"
                        : "Enter subject"
                    }
                    id="subject"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.subject}
                  />
                  <StyledSpan />
                  <StyledError>
                    <ErrorMessage name="subject" />
                  </StyledError>
                </StyledFormElements>
                <StyledFormElements>
                  <StyledLabel htmlFor="message">
                    {currentLanguage === "PL" ? "Wiadomość" : "Message"}
                  </StyledLabel>
                  <StyledField
                    type="text"
                    name="message"
                    id="message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    as="textarea"
                    placeholder={
                      currentLanguage === "PL"
                        ? "Wpisz wiadomość"
                        : "Enter your message"
                    }
                  />
                  <StyledSpan textarea />
                  <StyledError message>
                    <ErrorMessage name="message" />
                  </StyledError>
                </StyledFormElements>
              </StyledFormElementsWrapper>
              <StyledContactElements>
                <FormInfo />
                <StyledCheckboxWrapper>
                  <StyledCheckboxElements>
                    <StyledCheckbox
                      type="checkbox"
                      name="acceptTerms"
                      id="acceptTerms"
                      checked={values.acceptTerms}
                      onChange={handleChange}
                    />
                    <StyledCheckboxLabel htmlFor="acceptTerms">
                      {currentLanguage === "PL"
                        ? " Akceptuje Politykę Prywatności"
                        : "I accept the Privacy Policy"}
                    </StyledCheckboxLabel>
                  </StyledCheckboxElements>
                  <StyledError checkbox>
                    <ErrorMessage name="acceptTerms" />
                  </StyledError>
                </StyledCheckboxWrapper>
                <FormButton
                  loadingAlert={loadingAlert}
                  disabled={isSubmitting}
                />
                <Alert successAlert={successAlert} errorAlert={errorAlert} />
              </StyledContactElements>
              <HeartIcon />
            </StyledForm>
          );
        }}
      </Formik>
    </StyledFormWrapper>
  );
};

const mapStateToProps = (state) => ({
  currentLanguage: state.currentLanguage,
});

export default connect(mapStateToProps)(ContactForm);
