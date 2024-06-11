// Vendors
import styled from 'styled-components';

const LogoComponentStyled = styled.div`
  display: flex;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export { LogoComponentStyled };
