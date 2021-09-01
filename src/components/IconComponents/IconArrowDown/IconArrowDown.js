import React from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

export const StyledIconArrowDown = styled(IoIosArrowDown)`
  display: ${({ dropdownopen }) =>
    dropdownopen === "true" ? "none" : "inline-block"};
  margin: ${({ nav }) => (nav === "true" ? "-2px 3px" : "0px 4px")};
  cursor: pointer;
`;

const IconArrowDown = (props) => {
  const { dropdownOpen, nav, size, onClick } = props;

  return (
    <StyledIconArrowDown
      dropdownopen={dropdownOpen}
      nav={nav}
      size={size}
      onClick={onClick}
    />
  );
};

export default IconArrowDown;
