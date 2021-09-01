import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledFormText = styled.p`
  width: 90%;
  color: ${({ theme }) => theme.colors.smokey};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  margin-bottom: ${({ theme }) => theme.margins.s};
  text-align: center;
  font-style: italic;
`;

export const StyledFormTextLink = styled(Link)`
  color: ${({ theme }) => theme.colors.darkBrown};
`;
