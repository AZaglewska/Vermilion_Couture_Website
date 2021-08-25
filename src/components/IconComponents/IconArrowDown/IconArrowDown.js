import React from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

export const StyledIconArrowDown = styled(IoIosArrowDown)`
  width: 15px;
  display: ${(props) => (props.dropdownOpen ? "none" : "inline-block")};
  margin: ${(props) => (props.nav ? "-2px 3px" : "0px 3px")};
`;

const IconArrowDown = (props) => {
  const { dropdownOpen, nav } = props;

  return <StyledIconArrowDown dropdownOpen={dropdownOpen} nav={nav} />;
};

export default IconArrowDown;
