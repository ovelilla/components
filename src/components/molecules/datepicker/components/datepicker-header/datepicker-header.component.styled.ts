// Vendors
import styled from 'styled-components';

const DatepickerHeaderComponentStyled = styled.div`
  display: grid;
  grid-template-columns: minmax(max-content, 3fr) minmax(0, 1fr) minmax(max-content, 3fr);
  padding: ${({ theme }) => theme.spaces.space8};
`;

export { DatepickerHeaderComponentStyled };
