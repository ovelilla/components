// Vendors
import styled from 'styled-components';

const ScrollareaContentComponentStyled = styled.div`
  -ms-overflow-style: none;
  flex: 1 1 auto;
  height: 100%;
  overflow: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export { ScrollareaContentComponentStyled };
