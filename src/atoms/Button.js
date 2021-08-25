import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
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
      padding: 20px;
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
