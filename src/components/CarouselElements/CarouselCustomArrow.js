import React from "react";
import styled from "styled-components";

const LeftArrow = styled.i`
  position: absolute !important;
  left: 25px;
  z-index: 1;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 6px;
  opacity: 0.8;
  cursor: pointer;
  transform: rotate(135deg);

  &:hover {
    opacity: 0.6;
  }
`;

const RightArrow = styled.i`
  position: absolute !important;
  right: 25px;
  z-index: 1;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 6px;
  opacity: 0.8;
  cursor: pointer;
  transform: rotate(-45deg);
  &:hover {
    opacity: 0.6;
  }
`;

const CustomLeftArrow = ({ onClick }) => (
  <LeftArrow onClick={() => onClick()} />
);
const CustomRightArrow = ({ onClick }) => {
  return <RightArrow onClick={() => onClick()} />;
};

export { CustomLeftArrow, CustomRightArrow };
