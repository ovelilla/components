// Vendors
import styled from 'styled-components';

const AppLayoutStyled = styled.div`
  background-color: ${({ theme }) => `hsl(${theme.colors.background})`};
  display: flex;
  flex: 1;
`;

const AppLayoutLeftStyled = styled.div`
  border-right: ${({ theme }) => `${theme.border.border1} solid hsl(${theme.colors.border})`};
  display: none;
  flex-direction: column;
  flex: 1 0 ${({ theme }) => theme.width.width256};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;

const AppLayoutRightStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
`;

const AppLayoutMainStyled = styled.main`
  display: flex;
  flex: 1;
`;

export { AppLayoutStyled, AppLayoutLeftStyled, AppLayoutRightStyled, AppLayoutMainStyled };
