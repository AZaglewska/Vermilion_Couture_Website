import styled from "styled-components";

export const StyledHeartIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledHeartIconText = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.smokey};
`;

export const StyledHeartIcon = styled.svg`
  width: 15px;
  margin: 0 5px;
`;
