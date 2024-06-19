// Vendors
import styled from 'styled-components';

const AppLayoutStyled = styled.div`
  background-color: ${({ theme }) => `hsl(${theme.colors.background})`};
  display: flex;
  flex: 1;
`;

const AppLayoutLeftStyled = styled.div`
  border-right: ${({ theme }) => `${theme.borders.border1} solid hsl(${theme.colors.border})`};
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    flex: 1 0 ${({ theme }) => theme.widths.width256};
    gap: ${({ theme }) => theme.spaces.space16};
  }
`;

const AppLayoutLeftHeaderStyled = styled.div`
  display: flex;
  padding: ${({ theme }) => `${theme.spaces.space16} ${theme.spaces.space24}`};
`;

const AppLayoutLeftBodyStyled = styled.div``;

const AppLeftLayoutFooterStyled = styled.div``;

const AppLayoutRightStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
`;

const AppLayoutMainStyled = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spaces.space16};
`;

export {
  AppLayoutLeftBodyStyled,
  AppLayoutLeftHeaderStyled,
  AppLayoutLeftStyled,
  AppLayoutMainStyled,
  AppLayoutRightStyled,
  AppLayoutStyled,
  AppLeftLayoutFooterStyled,
};
