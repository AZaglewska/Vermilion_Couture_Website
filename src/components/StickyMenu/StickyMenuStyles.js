import styled from "styled-components";
import { Link } from "react-router-dom";

export const StickyMenuContainer = styled.div`
  width: 100%;
  z-index: 2;
  height: 9vh;
  opacity: 0.9;
  background-color: ${({ theme }) => theme.colors.light};
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  display: ${({ menuClose }) => (menuClose ? "none" : "")};
  border-top: 1px solid ${({ theme }) => theme.colors.snowGrey};
`;

export const StickyMenuElements = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StickyMenuText = styled.p`
  margin-right: ${({ theme }) => theme.margins.m};
  font-size: ${({ theme }) => theme.fontSizes.s};
  @media (max-width: 540px) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
  @media (max-width: 320px) {
    font-size: ${({ theme }) => theme.fontSizes.xxs};
  }
`;

export const StickyMenuLink = styled(Link)`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-style: italic;
  @media (max-width: 540px) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
  @media (max-width: 320px) {
    font-size: ${({ theme }) => theme.fontSizes.xxs};
  }
`;

export const StickyMenuButton = styled.button`
  padding: 8px 20px;
  opacity: 0.99;
  margin-right: ${({ theme }) => theme.margins.s};
  outline: none;
  border: 2px solid ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.dark};
  transition: 1s all ease;
  :hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.dark};
  }
  @media (max-width: 540px) {
    padding: 6px 6px;
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;
