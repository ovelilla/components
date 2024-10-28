// Vendors
import styled, { css, keyframes } from 'styled-components';
// Constants
import {
  DEFAULT_ANIMATION_ACTIVE,
  DEFAULT_ANIMATION_DURATION,
  DEFAULT_ANIMATION_TIMING_FUNCTION,
  EXCLUDED_PROPS,
} from './constants/dialog-overlay.component.styled.constants';
// Types
import { DialogOverlayComponentStyledPropsType } from './types/dialog-overlay.component.styled.props.type';
// Utils
import { getOpacity } from './utils/dialog-overlay.component.styled.utils';

const fadeIn = keyframes`
  from { 
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const DialogOverlayComponentStyled = styled('div').withConfig({
  shouldForwardProp: (prop) => !EXCLUDED_PROPS.includes(prop),
})<DialogOverlayComponentStyledPropsType>`
  ${({
    animation: {
      active = DEFAULT_ANIMATION_ACTIVE,
      duration = DEFAULT_ANIMATION_DURATION,
      timingFunction = DEFAULT_ANIMATION_TIMING_FUNCTION,
    } = {},
    opacity,
    open,
    theme,
  }) => css`
    animation-name: ${open ? fadeIn : fadeOut};
    animation-timing-function: ${timingFunction};
    animation-fill-mode: forwards;
    animation-duration: ${active ? `${duration}ms` : '0ms'};
    animation-play-state: ${active ? 'running' : 'paused'};
    background-color: rgba(0, 0, 0, ${getOpacity({ opacity, theme })});
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
  `}
`;

export { DialogOverlayComponentStyled };
