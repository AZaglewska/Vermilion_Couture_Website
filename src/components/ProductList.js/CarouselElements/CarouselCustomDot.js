import React from "react";
import styled from "styled-components";

const DotList = styled.li`
  button {
    width: 30px;
    height: 3.7px;
    border: 1px solid ${({ theme }) => theme.colors.softGrey};
    margin: 10px 2px 0 2px;
    outline: none;
    cursor: pointer;
  }
`;

const CustomDot = ({ onClick, active }) => {
  return (
    <DotList>
      <button
        style={{ background: active ? "#dcdcdc" : "initial" }}
        onClick={() => onClick()}
      />
    </DotList>
  );
};

export default CustomDot;
