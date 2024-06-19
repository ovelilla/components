// Vendors
import styled from 'styled-components';

const HeaderComponentStyled = styled.header`
  align-items: center;
  border-bottom: ${({ theme }) => `${theme.borders.border1} solid hsl(${theme.colors.border})`};
  display: flex;
  height: ${({ theme }) => theme.heights.height64};
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spaces.space16};
`;

const HeaderComponentLeftStyled = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
`;

const HeaderComponentLogoWrapperStyled = styled.div`
  display: flex;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const HeaderComponentRightStyled = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  gap: ${({ theme }) => theme.spaces.space16};
`;

export {
  HeaderComponentLeftStyled,
  HeaderComponentLogoWrapperStyled,
  HeaderComponentRightStyled,
  HeaderComponentStyled,
};
