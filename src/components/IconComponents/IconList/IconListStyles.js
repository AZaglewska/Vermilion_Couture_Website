import styled from "styled-components";

export const IconLink = styled.a`
  margin-bottom: ${({ footer }) => (footer ? "8px" : "0px")};
`;

export const Icon = styled.svg`
  width: 35px;
  height: 20px;
  fill: ${({ theme }) => theme.colors.dark};
  transition: fill 0.5s;
  @media (max-width: 320px) {
    width: ${({ footer }) => (footer ? "35px" : "30px")};
    height: ${({ footer }) => (footer ? "20px" : "17px")};
  }
  :hover {
    fill: ${({ theme }) => theme.colors.goldBeige};
  }
`;
