import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledFooterContainer = styled.div`
  height: 40vh;
  margin-top: 50px;
`;

export const StyledFooterElementsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  height: inherit;
  background-color: ${({ theme }) => theme.colors.lightBeige};
`;

export const StyledFooterElements = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 20px;
  color: ${({ theme }) => theme.colors.dark};

  h3 {
    margin: 10px 0;
  }
`;

export const StyledFooterIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.dark};
`;

export const StyledFooterDesigner = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.lightBeige};
  height: 12vh;
`;
