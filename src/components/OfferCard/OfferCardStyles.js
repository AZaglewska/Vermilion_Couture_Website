import styled from "styled-components";

export const OfferCardWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.goldBeige};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  @media (max-width: 430px) {
    padding: 30px 0;
  }
`;

export const OfferCardLineWrapper = styled.div`
  width: 90%;
`;

export const OfferCardElementsWrapper = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-around;
  text-align: center;
  margin-top: ${({ theme }) => theme.margins.s};

  @media (max-width: 540px) {
    display: ${({ second }) => (second ? "none" : "flex")};
  }

  @media (max-width: 430px) {
    flex-direction: column;
  }
`;

export const OfferCardElements = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${({ theme }) => theme.margins.m} ${({ theme }) => theme.margins.s};

  p {
    color: ${({ theme }) => theme.colors.smokey};
    margin-top: ${({ theme }) => theme.margins.m};
    font-size: ${({ theme }) => theme.fontSizes.s};
  }

  @media (max-width: 540px) {
    margin: 8px 0px;
  }
`;

export const OfferCardIcon = styled.img`
  width: 60px;

  @media (max-width: 430px) {
    width: 40px;
  }
`;
