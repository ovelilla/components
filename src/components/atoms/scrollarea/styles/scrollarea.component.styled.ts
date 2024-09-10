// Vendors
import styled, { css } from 'styled-components';
// Constants
import { EXCLUDED_PROPS } from './constants/scrollarea.component.styled.constants';
// Enums
import { ScrollareaComponentPositionEnum } from '../enums/scrollarea.component.enums';
// Types
import { ScrollareaComponentStyledPropsType } from './types/scrollarea.component.styled.props.type';
// Utils
import { getScrollareaGap, getTrackWidth } from './utils/scrollarea.component.styled.utils';

const ScrollareaComponentStyled = styled.div.withConfig({
  shouldForwardProp: (prop: string): boolean => !EXCLUDED_PROPS.includes(prop),
})<ScrollareaComponentStyledPropsType>`
  ${({ gap, position, size, theme }) =>
    position === ScrollareaComponentPositionEnum.RELATIVE
      ? css`
          display: grid;
          grid-template-columns: 1fr ${getTrackWidth({ size, theme })};
          grid-template-rows: 100%;
          gap: ${getScrollareaGap({ gap, theme })};
        `
      : css``}
  height: 100%;
  overflow: hidden;
  position: relative;
`;

export { ScrollareaComponentStyled };
