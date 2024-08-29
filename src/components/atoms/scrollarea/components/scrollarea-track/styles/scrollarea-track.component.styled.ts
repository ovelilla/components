// Vendors
import styled, { css } from 'styled-components';
// Constants
import { EXCLUDED_PROPS } from './constants/scrollarea-track.component.styled.constants';
// Enums
import { ScrollareaComponentPositionEnum } from 'components/atoms/scrollarea/enums/scrollarea.component.enums';
// Types
import { ScrollareaComponentTrackStyledPropsType } from './types/scrollarea-track.component.styled.props.type';
// Utils
import {
  getTrackBackgroundColor,
  getTrackBorderRadius,
  getTrackWidth,
} from './utils/scrollarea-track.component.styled.utils';

const ScrollareaTrackComponentStyled = styled.div.withConfig({
  shouldForwardProp: (prop: string): boolean => !EXCLUDED_PROPS.includes(prop),
})<ScrollareaComponentTrackStyledPropsType>`
  ${({ borderRadius, position, showTrack, size, theme }) => css`
    ${position === ScrollareaComponentPositionEnum.ABSOLUTE &&
    css`
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: ${getTrackWidth({ size, theme })};
    `}
    background-color: hsl(${getTrackBackgroundColor({ showTrack, theme })});
    border-radius: ${getTrackBorderRadius({ borderRadius, theme })};
    user-select: none;
    touch-action: none;
  `}
`;

export { ScrollareaTrackComponentStyled };
