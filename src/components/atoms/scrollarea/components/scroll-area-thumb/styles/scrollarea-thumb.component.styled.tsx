// Vendors
import styled from 'styled-components';
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
      transform: `translate3d(0, ${thumbTranslateY}px, 0)`,
    },
  }))`
  background-color: hsl(${({ theme }) => theme.colors.border});
  border-radius: ${({ borderRadius, theme }) => getBorderRadius({ borderRadius, theme })};
  width: 100%;
`;

export { ScrollareaThumbComponentStyled };
