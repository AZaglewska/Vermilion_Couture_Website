import React from "react";
import styled from "styled-components";
import { IoIosArrowUp } from "react-icons/io";

export const StyledIconArrowUp = styled(IoIosArrowUp)`
  margin-left: ${({ theme }) => theme.margins.xs};
  display: ${({ dropdownopen }) =>
    dropdownopen === "true" ? "inline-block" : "none"};
`;

const IconArrowUp = (props) => {
  const { dropdownOpen, size } = props;

  return <StyledIconArrowUp dropdownopen={dropdownOpen} size={size} />;
};

export default IconArrowUp;
