import styled from "styled-components";
import { show } from "../../../globalStyles/Animations";

export const PrivacyPolicyContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${show} 0.1s ease forwards;
  animation-duration: 3s;
`;

export const PrivacyPolicyElements = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.margins.xl};
`;

export const PrivacyPolicyList = styled.ol`
  width: 90%;
  margin-bottom: ${({ theme }) => theme.margins.xl};
`;

export const PrivacyPolicyListMain = styled.li`
  list-style: none;
  p {
    font-size: ${({ theme }) => theme.fontSizes.l};
    color: ${({ theme }) => theme.colors.smokey};
    margin-bottom: ${({ theme }) => theme.margins.m};
    text-align: center;
    @media (max-width: 430px) {
      font-size: ${({ theme }) => theme.fontSizes.m};
    }
    @media (max-width: 320px) {
      font-size: ${({ theme }) => theme.fontSizes.s};
    }
  }
`;

export const PrivacyPolicyNested = styled.ol`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 25px;
  margin-bottom: ${({ theme }) => theme.margins.m};
  margin-left: ${({ theme }) => theme.margins.m};
  @media (max-width: 320px) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }

  a {
    color: ${({ theme }) => theme.colors.lightGrey};
    @media (max-width: 320px) {
      font-size: ${({ theme }) => theme.fontSizes.xxs};
    }
  }
  ul {
    margin-left: ${({ theme }) => theme.margins.xs};
    list-style: circle;
    @media (max-width: 320px) {
      font-size: ${({ theme }) => theme.fontSizes.xs};
    }
  }
`;
