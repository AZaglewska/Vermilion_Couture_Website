import React from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

export const StyledIconArrowDown = styled(IoIosArrowDown)`
  display: ${({ dropdownopen }) =>
    dropdownopen === "true" ? "none" : "inline-block"};
  margin: ${({ nav }) => (nav === "true" ? "-2px 3px" : "0px 4px")};
`;

const IconArrowDown = (props) => {
  const { dropdownOpen, nav, size } = props;

  return (
    <StyledIconArrowDown dropdownopen={dropdownOpen} nav={nav} size={size} />
  );
};

export default IconArrowDown;
