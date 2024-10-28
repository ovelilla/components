// Vendors
import styled, { css } from 'styled-components';
// Constants
import { EXCLUDED_PROPS } from './constants/title.component.styled.constants';
// Types
import { TitleComponentStyledPropsType } from './types/title.component.styled.props.type';
// Utils
import { getFontSize, getFontWeight } from './utils/title.component.styled.utils';

const TitleComponentStyled = styled.h2.withConfig({
  shouldForwardProp: (prop) => !EXCLUDED_PROPS.includes(prop),
})<TitleComponentStyledPropsType>`
  ${({ fontSize, fontWeight, theme }) => css`
    color: hsl(${({ theme }) => theme.colors.foreground});
    text-wrap: pretty;
    line-height: 1.5;
    font-size: ${getFontSize({ fontSize, theme })};
    font-weight: ${getFontWeight({ fontWeight, theme })};
  `};
`;

export { TitleComponentStyled };
