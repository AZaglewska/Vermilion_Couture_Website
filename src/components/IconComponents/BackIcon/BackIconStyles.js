import styled from "styled-components";

export const StyledBackIconContent = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledBackIcon = styled.svg`
  width: 30px;
  transition: ease 1s;
  fill: ${({ theme }) => theme.colors.lightGrey};
  @media (max-width: 430px) {
    width: 24px;
  }
`;
export const StyledBackIconText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: ${({ theme }) => theme.colors.lightGrey};
  margin-left: ${({ theme }) => theme.margins.xs};
  transition: ease 1s;
  @media (max-width: 430px) {
    font-size: 16px;
  }
`;

export const StyledBackIconWrapper = styled.div`
  align-self: center;
  cursor: pointer;
  &:hover,
  &:focus {
    ${StyledBackIcon} {
      fill: ${({ theme }) => theme.colors.goldBeige};
    }
    ${StyledBackIconText} {
      color: ${({ theme }) => theme.colors.goldBeige};
    }
  }
`;
