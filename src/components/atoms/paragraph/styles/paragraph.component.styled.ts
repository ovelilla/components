// Vendors
import styled from 'styled-components';

const ParagraphComponentStyled = styled.p`
  color: hsl(${({ theme }) => theme.colors.foreground});
  text-wrap: pretty;
`;

export { ParagraphComponentStyled };
