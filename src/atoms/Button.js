import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  color: white;
  padding: 10px 20px;
  outline: none;

  ${({ flagIcon }) =>
    flagIcon &&
    css`
      background-image: url(${flagIcon});
      background-repeat: no-repeat;
      background-color: transparent;
      border: none;
      background-size: 60%;
      background-position: 50% 24%;

      /* margin: 0px 10px; */
      /* padding: 15px; */

      /* @media (max-width: 682px) {
        background-size: 60%;
      } */
    `};
`;

const Button = ({
  children,
  styleType,
  flagIcon,
  onClickFn,
  buttonType,
  isForm,
}) => {
  return (
    <StyledButton
      onClick={onClickFn}
      styleType={styleType}
      flagIcon={flagIcon}
      isForm={isForm}
      type={buttonType ? buttonType : "button"}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
