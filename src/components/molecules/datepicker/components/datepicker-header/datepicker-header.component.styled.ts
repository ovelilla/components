// Vendors
import styled from 'styled-components';

const DatepickerHeaderComponentStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spaces.space8};
`;

const DatepickerHeaderComponenCenterStyled = styled.div`
  flex: 1;
`;

export { DatepickerHeaderComponentStyled, DatepickerHeaderComponenCenterStyled };
