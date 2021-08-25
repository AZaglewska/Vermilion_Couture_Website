import styled from "styled-components";
import { show } from "../../../globalStyles/Animations";
import backgroundImage from "../../../assets/images/background/IMG_2464-Edit.jpg";

export const PrivacyPolicyContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${show} 0.1s ease forwards;
  animation-duration: 3s;
`;

export const PrivacyPolicyBackground = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 90% 39%;
  height: 50vh;
  width: 100%;
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

    @media (max-width: 430px) {
      font-size: ${({ theme }) => theme.fontSizes.m};
    }
  }
`;

export const PrivacyPolicyNested = styled.ol`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 25px;
  margin-bottom: ${({ theme }) => theme.margins.m};
  margin-left: ${({ theme }) => theme.margins.m};
  span {
    display: block;
    font-size: 12px;
  }
  ul {
    margin-left: 20px;
    list-style: circle;
  }
`;
