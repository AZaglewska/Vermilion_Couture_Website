import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledLogo } from "../../IconComponents/LogoIcon/LogoIconStyles";
import { StyledIconArrowDown } from "../../IconComponents/IconArrowDown/IconArrowDown";
import { StyledIconArrowUp } from "../../IconComponents/IconArrowUp/IconArrowUp";
import { show } from "../../../globalStyles/Animations";

export const MobileNavContent = styled.ul`
  display: none;
  @media (max-width: 768px) {
    overflow-x: hidden;
    z-index: 15;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    position: fixed;
    transform: ${({ hamburgerMenuOpen }) =>
      hamburgerMenuOpen ? "translateY(0)" : "translateY(-100%)"};
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    transition: transform 0.3s ease-in-out;
  }
`;
export const MobileIconContent = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.snowGrey};
  display: flex;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.margins.m};
  height: 20vh;
`;

export const MobileIconWrapper = styled.div`
  width: ${({ flag }) => (flag ? "20%" : "60%")};
  &:hover {
    ${StyledLogo} {
      fill: ${({ theme }) => theme.colors.darkBeige};
    }
  }
`;

export const MobileDropdown = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;
export const MobileDropbtn = styled.button`
  color: ${({ theme }) => theme.colors.dark};
  background-color: transparent;
  border: none;
  position: relative;
  font-size: ${({ theme }) => theme.fontSizes.l};
  margin: ${({ contact }) => (contact ? "5px 16px 0 0" : "")};

  @media (max-width: 430px) {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }

  @media (max-width: 320px) {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }

  &:after {
    content: "";
    display: block;
    width: 0;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.greyBeige};
    transition: width 0.3s;
    position: absolute;
    top: 108%;
  }
`;

export const MobileDropbtnLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.dark};
`;
export const MobileButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ dropdownOpen }) => (dropdownOpen ? "5px" : "20px")};

  &:hover,
  &:focus,
  &:active {
    ${StyledIconArrowDown} {
      color: ${({ theme }) => theme.colors.greyBeige};
    }

    ${StyledIconArrowUp} {
      color: ${({ theme }) => theme.colors.greyBeige};
    }

    ${MobileDropbtn} {
      color: ${({ theme }) => theme.colors.greyBeige};
      :after {
        width: 100%;
        transition: 0.3s;
      }
    }
    ${MobileDropbtnLink} {
      color: ${({ theme }) => theme.colors.greyBeige};
    }
  }
`;

export const MobileDropdownContent = styled.div`
  display: ${({ dropdownOpen }) => (dropdownOpen ? "flex" : "none")};
  flex-direction: column;
  text-align: center;
`;

export const MobileDropdownContentLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.delicateGrey};
  font-size: ${({ theme }) => theme.fontSizes.m};
  animation: ${show} 0.1s ease forwards;
  animation-duration: 1s;
  transition: ease 1s;
  margin: ${({ theme }) => theme.margins.s} 0 ${({ theme }) => theme.margins.xs}
    0;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.smokey};
  }

  @media (max-width: 540px) {
    font-size: 18px;
  }

  @media (max-width: 430px) {
    font-size: 14px;
    margin: ${({ theme }) => theme.margins.xs} 0
      ${({ theme }) => theme.margins.xs} 0;
  }

  @media (max-width: 320px) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

export const MobileFooter = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.snowGrey};
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
