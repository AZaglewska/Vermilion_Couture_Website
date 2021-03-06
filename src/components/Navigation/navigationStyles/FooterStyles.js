import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledFooterContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightBeige};
`;

export const StyledFooterElementsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: inherit;
  width: 90%;

  @media (max-width: 540px) {
    flex-direction: column;
  }
`;

export const StyledFooterElements = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.margins.m} 0;
  color: ${({ theme }) => theme.colors.dark};

  @media (max-width: 540px) {
    align-items: center;
  }

  h3 {
    margin-bottom: ${({ theme }) => theme.margins.m};
  }

  p {
    margin-bottom: ${({ theme }) => theme.margins.s};
  }
`;

export const StyledFooterContactLink = styled(Link)`
  color: ${({ theme }) => theme.colors.dark};
  text-decoration: none;
  transition: ease 1s;
`;

export const StyledFooterContactWrapper = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 15px;
    fill: ${({ theme }) => theme.colors.dark};
    margin-right: ${({ theme }) => theme.margins.xs};
    transition: ease 1s;
  }

  :hover {
    ${StyledFooterContactLink} {
      color: ${({ theme }) => theme.colors.delicateGrey};
    }
    svg {
      fill: ${({ theme }) => theme.colors.delicateGrey};
    }
  }
`;

export const StyledFooterIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (max-width: 540px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: ${({ theme }) => theme.margins.s};
  transition: ease 1s;
  &:hover {
    color: ${({ theme }) => theme.colors.delicateGrey};
  }
`;

export const StyledFooterDesigner = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.lightBeige};
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    @media (max-width: 320px) {
      font-size: 13px;
    }
  }
  img {
    width: 80px;
    margin: ${({ theme }) => theme.margins.xs} 0;
  }
`;
