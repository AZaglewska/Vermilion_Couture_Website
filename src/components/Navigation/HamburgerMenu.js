import React, { useState } from "react";
import styled from "styled-components";
import MobileNav from "./MobileNav";

const StyledBurger = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  position: ${({ open }) => (open ? "fixed" : "absolute")};
  top: ${({ open }) => (open ? "4%" : "4.3%")};
  right: ${({ open }) => (open ? "4%" : "2%")};
  z-index: 20;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  @media (max-width: 540px) {
    right: ${({ open }) => (open ? "none" : "5%")};
  }

  div {
    width: 1.5rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ecdbba" : "#353530")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
      <MobileNav open={open} />
    </>
  );
};

export default HamburgerMenu;
