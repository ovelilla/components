// Vendors
import styled, { css, keyframes } from 'styled-components';
// Constants
import {
  DEFAULT_ANIMATION_ACTIVE,
  DEFAULT_ANIMATION_DURATION,
  DEFAULT_ANIMATION_TIMING_FUNCTION,
  EXCLUDED_PROPS,
} from './constants/dialog-container.component.styled.constants';
// Types
import { DialogContainerComponentStyledPropsType } from './types/dialog-container.component.styled.props.type';
// Utils
import { getBorderRadius, getPadding } from './utils/dialog-container.component.styled.utils';

const slideIn = keyframes`
  from {
    transform: translateY(-8px);
  }
  to {
    transform: translateY(0);
  }
`;

const slideOut = ({
  isFullscreen,
  translate: { x, y },
}: {
  isFullscreen: boolean;
  translate: { x: number; y: number };
}) => {
  const xFrom = isFullscreen ? 0 : x;
  const yFrom = isFullscreen ? 0 : y;
  const xTo = isFullscreen ? 0 : xFrom;
  const yTo = isFullscreen ? -8 : yFrom - 8;

  return keyframes`
    from {
      transform: translate(${xFrom}px, ${yFrom}px);
    }
    to {
      transform: translate(${xTo}px, ${yTo}px);
    }
  `;
};

const DialogContainerComponentStyled = styled('div')
  .withConfig({
    shouldForwardProp: (prop) => !EXCLUDED_PROPS.includes(prop),
  })
  .attrs<DialogContainerComponentStyledPropsType>(({ isFullscreen, size, translate }) => ({
    style: {
      ...(!isFullscreen && size.height && { height: `${size.height}px` }),
      ...(!isFullscreen && size.width && { width: `${size.width}px` }),
      ...(!isFullscreen && { transform: `translate(${translate.x}px, ${translate.y}px)` }),
    },
  }))`
   ${({
     animation: {
       active = DEFAULT_ANIMATION_ACTIVE,
       duration = DEFAULT_ANIMATION_DURATION,
       timingFunction = DEFAULT_ANIMATION_TIMING_FUNCTION,
     } = {},
     borderRadius,
     isFullscreen,
     minSize,
     open,
     padding,
     position,
     theme,
     translate,
   }) => css`
     ${isFullscreen &&
     css`
       height: 100%;
       width: 100%;
     `};
     animation-name: ${open ? slideIn : slideOut({ isFullscreen, translate })};
     animation-timing-function: ${timingFunction};
     animation-duration: ${active ? `${duration}ms` : '0ms'};
     animation-play-state: ${active ? 'running' : 'paused'};
     background-color: hsl(${theme.colors.background});
     border-radius: ${getBorderRadius({ borderRadius, isFullscreen, theme })};
     display: flex;
     flex-direction: column;
     left: ${isFullscreen ? 0 : position.left}px;
     min-height: ${minSize.height}px;
     min-width: ${minSize.width}px;
     padding: ${getPadding({ padding, theme })};
     position: absolute;
     top: ${isFullscreen ? 0 : position.top}px;
   `}
`;

export { DialogContainerComponentStyled };
