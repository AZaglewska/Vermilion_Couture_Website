import styled from "styled-components";

export const StyledHeartIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledHeartIcon = styled.svg`
  width: 15px;
  fill: ${({ theme }) => theme.colors.smokey};
  margin: 0 ${({ theme }) => theme.margins.xs};
`;

export const StyledHeartIconText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: ${({ theme }) => theme.colors.smokey};
`;
