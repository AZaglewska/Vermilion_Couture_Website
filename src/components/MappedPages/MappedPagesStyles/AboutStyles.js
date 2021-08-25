import styled from "styled-components";

export const StyledAboutList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

export const StyledAboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledAboutElements = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 ${({ theme }) => theme.margins.xl};
`;

export const StyledTitleContainer = styled.div`
  align-self: flex-start;
  margin-bottom: ${({ theme }) => theme.margins.l};
`;
