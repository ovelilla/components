// Vendors
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// Constants
import { EXCLUDED_PROPS } from './constants/link.component.styled.constants';
// Types
import { LinkComponentPropsType } from './types/link.component.styled.props.type';
// Utils
import { getLinkFontSize } from './utils/link.component.styled.utils';

const LinkComponentStyled = styled(Link).withConfig({
  shouldForwardProp: (prop) => !EXCLUDED_PROPS.includes(prop),
})<LinkComponentPropsType>`
  align-items: center;
  color: hsl(${({ theme }) => theme.colors.primary});
  cursor: pointer;
  display: inline-flex;
  font-size: ${({ size, theme }) => getLinkFontSize({ size, theme })};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  gap: ${({ theme }) => theme.spaces.space8};
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};

  &:hover {
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

export { LinkComponentStyled };
