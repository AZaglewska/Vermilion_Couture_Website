import styled from "styled-components";

export const StyledBackIconContent = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledBackIcon = styled.svg`
  width: 30px;
  transition: ease 1s;
  fill: ${({ theme }) => theme.colors.lightGrey};
  @media (max-width: 320px) {
    width: 20px;
  }
`;
export const StyledBackIconText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: ${({ theme }) => theme.colors.lightGrey};
  margin-left: ${({ theme }) => theme.margins.xs};
  transition: ease 1s;
  @media (max-width: 320px) {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;

export const StyledBackIconWrapper = styled.div`
  align-self: center;
  cursor: pointer;
  &:hover {
    ${StyledBackIcon} {
      fill: ${({ theme }) => theme.colors.goldBeige};
    }
    ${StyledBackIconText} {
      color: ${({ theme }) => theme.colors.goldBeige};
    }
  }

  &:focus {
    ${StyledBackIcon} {
      fill: ${({ theme }) => theme.colors.goldBeige};
    }
    ${StyledBackIconText} {
      color: ${({ theme }) => theme.colors.goldBeige};
    }
  }
`;
