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
  border-bottom: 1px solid lightgray;
  padding: 10px 40px;
  width: 100%;
`;

export const NavIconWrapper = styled.div`
  @media (max-width: 540px) {
    display: ${({ list }) => (list ? "none" : "")};
    width: ${(props) => (props.flag ? "5%" : "95%")};
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
  font-size: 14px;
  height: 12vh;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavDropbtn = styled.button`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.s};
  background-color: transparent;
  padding: 16px 0;
  font-size: 16px;
  border: none;

  :hover {
    color: ${({ theme }) => theme.colors.goldBeige};
  }

  :focus {
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
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
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

  :hover {
    color: ${({ theme }) => theme.colors.goldBeige};
  }
  :focus {
    color: ${({ theme }) => theme.colors.goldBeige};
  }
`;

export const NavDropdown = styled.div`
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
  :hover {
    ${NavDropdownContent} {
      display: block;
      animation: ${show} 0.7s ease forwards;
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
