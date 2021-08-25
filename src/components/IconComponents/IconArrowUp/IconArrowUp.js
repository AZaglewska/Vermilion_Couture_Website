import React from "react";
import styled from "styled-components";
import { IoIosArrowUp } from "react-icons/io";

export const StyledIconArrowUp = styled(IoIosArrowUp)`
  width: 15px;
  margin-left: 3px;
  display: ${(props) => (props.dropdownOpen ? "inline-block" : "none")};
`;

const IconArrowUp = (props) => {
  const { dropdownOpen } = props;

  return <StyledIconArrowUp dropdownOpen={dropdownOpen} />;
};

export default IconArrowUp;
