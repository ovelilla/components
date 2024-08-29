// Vendors
import styled, { css } from 'styled-components';
// Constants
import { EXCLUDED_PROPS } from './constants/scrollarea-thumb.component.styled.constants';
// Types
import { ScrollareaComponentThumbStyledPropsType } from './types/scrollarea-thumb.component.styled.props.type';
// Utils
import { getBorderRadius } from './utils/scrollarea-thumb.component.styled.utils';

const ScrollareaThumbComponentStyled = styled.div
  .withConfig({
    shouldForwardProp: (prop: string): boolean => !EXCLUDED_PROPS.includes(prop),
  })
  .attrs<ScrollareaComponentThumbStyledPropsType>(({ thumbHeight, thumbTranslateY }) => ({
    style: {
      height: thumbHeight,
      transform: `translate(0, ${thumbTranslateY}px)`,
    },
  }))`
  ${({ borderRadius, theme }) => css`
    background-color: hsl(${theme.colors.border});
    border-radius: ${getBorderRadius({ borderRadius, theme })};
    user-select: none;
    touch-action: none;
    width: 100%;
  `}
`;

export { ScrollareaThumbComponentStyled };
