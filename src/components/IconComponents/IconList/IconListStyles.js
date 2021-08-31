import styled from "styled-components";

export const IconLink = styled.a`
  margin-bottom: ${({ footer }) => (footer ? "8px" : "0px")};
`;

export const Icon = styled.svg`
  width: 35px;
  height: 20px;
  fill: ${({ theme }) => theme.colors.dark};
  transition: fill 0.5s;

  :hover {
    fill: ${({ theme }) => theme.colors.goldBeige};
  }
`;
