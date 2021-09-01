import React from "react";
import styled from "styled-components";

const LeftArrow = styled.i`
  position: absolute;
  left: 25px;
  z-index: 1;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 10px;
  opacity: 0.7;
  cursor: pointer;
  transform: rotate(135deg);

  &:hover {
    opacity: 1;
  }
`;

const RightArrow = styled.i`
  position: absolute;
  right: 25px;
  z-index: 1;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 10px;
  opacity: 0.7;
  cursor: pointer;
  transform: rotate(-45deg);
  &:hover {
    opacity: 1;
  }
`;

const CustomLeftArrow = ({ onClick }) => (
  <LeftArrow onClick={() => onClick()} />
);
const CustomRightArrow = ({ onClick }) => {
  return <RightArrow onClick={() => onClick()} />;
};

export { CustomLeftArrow, CustomRightArrow };
