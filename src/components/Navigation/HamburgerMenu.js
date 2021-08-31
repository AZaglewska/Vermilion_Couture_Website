import React, { useState } from "react";
import styled from "styled-components";
import MobileNav from "./MobileNav";

const StyledBurger = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  position: ${({ hamburgerMenuOpen }) => (hamburgerMenuOpen ? "fixed" : "")};
  top: ${({ hamburgerMenuOpen }) => (hamburgerMenuOpen ? "6%" : "")};
  right: ${({ hamburgerMenuOpen }) => (hamburgerMenuOpen ? "4.5%" : "")};
  z-index: 20;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  @media (max-width: 540px) {
    right: ${({ hamburgerMenuOpen }) => (hamburgerMenuOpen ? "none" : "5%")};
  }

  div {
    width: 1.5rem;
    height: 0.25rem;
    background-color: ${({ hamburgerMenuOpen }) =>
      hamburgerMenuOpen ? "#ecdbba" : "#353530"};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ hamburgerMenuOpen }) =>
        hamburgerMenuOpen ? "rotate(45deg)" : "rotate(0)"};
    }
    &:nth-child(2) {
      transform: ${({ hamburgerMenuOpen }) =>
        hamburgerMenuOpen ? "translateX(100%)" : "translateX(0)"};
      opacity: ${({ hamburgerMenuOpen }) => (hamburgerMenuOpen ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ hamburgerMenuOpen }) =>
        hamburgerMenuOpen ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`;

const HamburgerMenu = () => {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const toggleHamburgerMenuOpen = () => {
    setHamburgerMenuOpen(!hamburgerMenuOpen);
  };

  return (
    <>
      <StyledBurger
        hamburgerMenuOpen={hamburgerMenuOpen}
        onClick={toggleHamburgerMenuOpen}
      >
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
      <MobileNav
        hamburgerMenuOpen={hamburgerMenuOpen}
        toggleHamburgerMenuOpen={toggleHamburgerMenuOpen}
      />
    </>
  );
};

export default HamburgerMenu;
