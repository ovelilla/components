// Vendors
import styled from 'styled-components';

const ButtonPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces.space16};
`;

const ButtonPageRowStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spaces.space16};
`;

export { ButtonPageStyled, ButtonPageRowStyled };
