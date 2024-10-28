// Vendors
import styled from 'styled-components';

const ParagraphComponentStyled = styled.p`
  color: hsl(${({ theme }) => theme.colors.foreground});
  text-wrap: pretty;
  line-height: 1.5;
`;

export { ParagraphComponentStyled };
