import styled from "styled-components";

export const StyledLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledLogo = styled.svg`
  width: 40px;
  fill: ${({ theme }) => theme.colors.dark};
  transition: fill 0.5s;
  :hover {
    fill: ${({ theme }) => theme.colors.lightGold};
  }
`;

export const StyledLogoTitle = styled.svg`
  margin-top: ${({ theme }) => theme.margins.xs};
  width: 90px;
  fill: ${({ theme }) => theme.colors.dark};
`;

export const StyledLogoSubtitle = styled.svg`
  margin-top: ${({ theme }) => theme.margins.xs};
  width: 70px;
  fill: ${({ theme }) => theme.colors.dark};
`;
