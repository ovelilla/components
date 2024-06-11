// Vendors
import styled from 'styled-components';

const HeaderComponentStyled = styled.header`
  align-items: center;
  border-bottom: ${({ theme }) => `${theme.border.border1} solid hsl(${theme.colors.border})`};
  display: flex;
  height: ${({ theme }) => theme.height.height64};
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spaces.space16};
`;

const HeaderComponentLeftStyled = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
`;

const HeaderComponentRightStyled = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  gap: ${({ theme }) => theme.spaces.space16};
`;

export { HeaderComponentStyled, HeaderComponentLeftStyled, HeaderComponentRightStyled };
