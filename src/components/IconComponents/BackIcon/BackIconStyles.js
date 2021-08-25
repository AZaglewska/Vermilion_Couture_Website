import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledBackIcon = styled.svg`
  width: 30px;
  transition: ease 1s;
  fill: ${({ theme }) => theme.colors.lightGrey};
`;

export const StyledBackIconText = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.lightGrey};
  margin-left: 5px;
  transition: ease 1s;
`;

export const StyledBackIconWrapper = styled.div`
  align-self: center;
  &:hover {
    ${StyledBackIcon} {
      fill: ${({ theme }) => theme.colors.goldBeige};
    }
    ${StyledBackIconText} {
      color: ${({ theme }) => theme.colors.goldBeige};
    }
  }

  &:focus {
    ${StyledBackIcon} {
      fill: ${({ theme }) => theme.colors.goldBeige};
    }
    ${StyledBackIconText} {
      color: ${({ theme }) => theme.colors.goldBeige};
    }
  }
`;

export const StyledBackIconLink = styled(Link)`
  text-decoration: none;
`;

export const StyledBackIconContent = styled.div`
  display: flex;
  align-items: center;
`;
