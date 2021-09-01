import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledLogo } from "../../IconComponents/LogoIcon/LogoIconStyles";
import { StyledIconArrowDown } from "../../IconComponents/IconArrowDown/IconArrowDown";
import { StyledIconArrowUp } from "../../IconComponents/IconArrowUp/IconArrowUp";
import { show } from "../../../globalStyles/Animations";

export const NavIconContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.snowGrey};
  padding: 10px 20px;
  width: 100%;
`;

export const NavIconWrapper = styled.div`
  @media (max-width: 768px) {
    display: ${({ list }) => (list === "true" ? "none" : "")};
    width: ${({ flag }) => (flag ? "10%" : "60%")};
  }
  :hover {
    ${StyledLogo} {
      fill: ${({ theme }) => theme.colors.goldBeige};
    }
  }
`;

export const NavDropdownContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 12vh;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavDropbtn = styled.button`
  color: ${({ theme }) => theme.colors.dark};
  background-color: transparent;
  padding: 16px 0;
  border: none;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.goldBeige};
  }

  &:after {
    content: "";
    display: block;
    width: 0;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.goldBeige};
    transition: width 0.3s;
    position: absolute;
    top: 78%;
  }
`;

export const NavDropbtnLinkText = styled.p`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.s};
  display: inline-block;
  position: relative;
`;

export const NavDropbtnLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.s};
  display: inline-block;
  position: relative;
`;

export const NavDropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: white;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

export const NavDropdownContentLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: ${({ theme }) => theme.fontSizes.s};
  display: block;
  position: relative;
  padding: 16px 10px;
  width: 150px;
  transition: ease 1s;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.softGrey};
  }
`;

export const NavDropdown = styled.div`
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
  &:hover,
  &:focus {
    ${NavDropdownContent} {
      display: block;
      animation: ${show} 0.7s ease forwards;
    }

    ${NavDropbtnLinkText} {
      color: ${({ theme }) => theme.colors.goldBeige};
    }
    ${NavDropbtnLink} {
      color: ${({ theme }) => theme.colors.goldBeige};
    }

    ${NavDropbtn} {
      :after {
        width: 100%;
        transition: 0.3s;
      }
    }

    ${StyledIconArrowDown} {
      display: none;
    }

    ${StyledIconArrowUp} {
      display: inline-block;
      color: ${({ theme }) => theme.colors.goldBeige};
      margin: -2px 3px;
    }
  }
`;
