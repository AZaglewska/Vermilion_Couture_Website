import React from "react";
import styled from "styled-components";
import { IoIosArrowUp } from "react-icons/io";

export const StyledIconArrowUp = styled(IoIosArrowUp)`
  margin-left: 4px;
  display: ${(props) => (props.dropdownOpen ? "inline-block" : "none")};
`;

const IconArrowUp = (props) => {
  const { dropdownOpen, size } = props;

  return <StyledIconArrowUp dropdownOpen={dropdownOpen} size={size} />;
};

export default IconArrowUp;
