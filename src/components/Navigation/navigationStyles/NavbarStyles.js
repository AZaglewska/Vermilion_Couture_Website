import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
  height: 12vh;
`;

export const StyledElementsConatainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding: 15px;
`;

export const StyledButtonContainer = styled.div`
  margin: 0 20px;
`;

export const StyledIconContainer = styled.div`
  margin: 0 20px;
`;

export const LogoContainer = styled.div`
  img {
    width: 50px;
  }
`;

export const DropdownLink = styled.div`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.s};
  display: inline-block;
  position: relative;
  padding: 0;

  :hover {
    color: ${({ theme }) => theme.colors.goldBeige};
  }

  &:after {
    content: "";
    display: none;
    width: 0;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.goldBeige};
    transition: width 0.3s;
    position: absolute;
    top: 78%;
  }

  &:hover:after {
    width: 100%;
    transition: 0.3s;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.s};
  display: inline-block;
  position: relative;
  padding: 16px 0px;

  :hover {
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

  &:hover:after {
    width: 100%;
    transition: 0.3s;
  }
`;

export const IconArrowDown = styled(IoIosArrowDown)`
  margin: 0 10px;
`;

export const IconArrowUp = styled(IoIosArrowUp)`
  display: none;
  margin: 0 10px;
`;

export const Dropbtn = styled.button`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.s};
  background-color: transparent;
  padding: 16px 0;
  font-size: 16px;
  border: none;

  :hover {
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

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: white;
  min-width: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 10;

  a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    color: ${({ theme }) => theme.colors.goldBeige};

    :hover {
      background-color: #f7f8fa;
    }
  }
`;

export const DropdownContentLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.s};
  display: inline-block;
  position: relative;
  padding: 16px 0px;
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  :hover {
    ${DropdownContent} {
      display: block;
    }
    ${DropdownLink} {
      color: ${({ theme }) => theme.colors.goldBeige};
    }

    ${NavLink} {
      color: ${({ theme }) => theme.colors.goldBeige};
    }
    ${Dropbtn} {
      :after {
        width: 100%;
        transition: 0.3s;
      }
    }

    ${IconArrowDown} {
      display: none;
    }

    ${IconArrowUp} {
      display: inline-block;
      color: ${({ theme }) => theme.colors.goldBeige};
    }
  }
`;
