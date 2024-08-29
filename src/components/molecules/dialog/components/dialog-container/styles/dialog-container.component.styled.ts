// Vendors
import styled, { css, keyframes } from 'styled-components';
// Constants
import { EXCLUDED_PROPS } from './constants/dialog-container.component.styled.constants';
// Types
import { DialogContainerComponentStyledPropsType } from './types/dialog-container.component.styled.props.type';
// Utils
import {
  getAnimation,
  getBorderRadius,
  getPadding,
} from './utils/dialog-container.component.styled.utils';

const slideIn = keyframes`
  from {
    transform: translateY(-8px);
  }
  to {
    transform: translateY(0);
  }
`;

const slideOut = ({ translate }: { translate: { x: number; y: number } }) => keyframes`
  from {
    transform: translate(${translate.x}px, ${translate.y}px);
  }
  to {
    transform: translate(${translate.x}px, ${translate.y - 8}px);
  }
`;

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
     animation,
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
     animation: ${open ? slideIn : slideOut({ translate })} ${getAnimation({ animation })};
     background-color: hsl(${theme.colors.background});
     border-radius: ${getBorderRadius({ borderRadius, isFullscreen, theme })};
     display: flex;
     flex-direction: column;
     left: ${isFullscreen ? 0 : position.left}px;
     min-height: ${minSize.height}px;
     min-width: ${minSize.width}px;
     overflow: hidden;
     padding: ${getPadding({ padding, theme })};
     position: absolute;
     top: ${isFullscreen ? 0 : position.top}px;
   `}
`;

export { DialogContainerComponentStyled };
