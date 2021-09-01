import styled from "styled-components";
import formImage from "../../../assets/images/form/IMG_2167-Edit.jpg";
import { Form, Field } from "formik";
import { show } from "../../../globalStyles/Animations";

export const StyledFormWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  animation: ${show} 0.1s ease forwards;
  animation-duration: 3s;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledContactImage = styled.div`
  width: 50%;
  background-image: url(${formImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 50vh;
  }
`;
export const StyledForm = styled(Form)`
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.lightBeige};
  padding: 40px 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const StyledFormElementsWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: ${({ first }) => (first ? "space-between" : "none")};
  flex-direction: ${({ second }) => (second ? "column" : "none")};
  margin-top: ${({ first }) => (first ? "50px" : "")};
  @media (max-width: 430px) {
    flex-direction: column;
  }
`;

export const StyledFormElements = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: ${({ first }) => (first ? "45%" : "")};

  @media (max-width: 430px) {
    width: ${({ first }) => (first ? "100%" : "")};
  }
`;

export const StyledLabel = styled.label`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  margin-bottom: ${({ theme }) => theme.margins.xs};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.darkBrown};
`;
export const StyledSpan = styled.span`
  content: "";
  position: absolute;
  height: 1.5px;
  background-color: ${({ theme }) => theme.colors.darkBrown};
  transition: all 0.5s linear;
  width: 0;
  bottom: ${({ textarea }) => (textarea ? "35%" : "47%")};
`;

export const StyledField = styled(Field)`
  border: none;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.lightGrey};
  outline: none;
  padding: 8px 0;
  resize: none;
  background-color: transparent;

  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.lightGrey};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-family: ${({ theme }) => theme.fontFamily.mainFont};
  }
  &:focus ~ {
    ${StyledSpan} {
      width: 100%;
      transition: 0.4s;
    }
  }
`;

export const StyledError = styled.div`
  color: ${({ theme }) => theme.colors.redAlert};
  height: 10px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  margin-top: ${({ checkbox }) => (checkbox ? "5px" : "10px")};
  margin-bottom: ${({ message, checkbox }) =>
    message || checkbox ? "15px" : "25px"};
`;
export const StyledContactElements = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.margins.m};
`;

export const StyledCheckboxWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  margin-top: ${({ theme }) => theme.margins.xs};
`;

export const StyledCheckbox = styled(Field)`
  height: initial;
  width: initial;
  display: none;
  cursor: pointer;
`;

export const StyledCheckboxLabel = styled.label`
  position: relative;
  cursor: pointer;
  text-align: center;
  color: ${({ theme }) => theme.colors.darkBrown};

  :before {
    content: "";
    -webkit-appearance: none;
    background-color: ${({ theme }) => theme.colors.lightBeige};
    border: 1.5px solid ${({ theme }) => theme.colors.darkBrown};
    padding: 5px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    margin: 0 3px 3px 0;
    border-radius: 2px;
    transition: 1s all ease;
  }
`;

export const StyledCheckboxElements = styled.div`
  display: flex;
  justify-content: center;

  ${StyledCheckbox}:checked + ${StyledCheckboxLabel}:after {
    content: "";
    display: block;
    position: absolute;
    top: 10%;
    left: 2.3%;
    width: 3px;
    height: 7px;
    border: solid ${({ theme }) => theme.colors.light};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  ${StyledCheckbox}:checked + ${StyledCheckboxLabel}:before {
    background-color: ${({ theme }) => theme.colors.darkBrown};
  }
`;
