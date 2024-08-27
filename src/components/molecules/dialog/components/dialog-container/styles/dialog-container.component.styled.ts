// Vendors
import styled, { css } from 'styled-components';
// Constants
import { EXCLUDED_PROPS } from './constants/dialog-container.component.styled.constants';
// Types
import { DialogContainerComponentStyledPropsType } from './types/dialog-container.component.styled.props.type';

const DialogContainerComponentStyled = styled('div')
  .withConfig({
    shouldForwardProp: (prop) => !EXCLUDED_PROPS.includes(prop),
  })
  .attrs<DialogContainerComponentStyledPropsType>(({ isFullscreen, size, translate }) => ({
    style: {
      maxHeight: !isFullscreen && size.height ? `${size.height}px` : 'none',
      maxWidth: !isFullscreen && size.width ? `${size.width}px` : 'none',
      transform: isFullscreen ? 'none' : `translate(${translate.x}px, ${translate.y}px)`,
    },
  }))`
   ${({ isFullscreen, minSize, position, size }) => css`
     ${isFullscreen &&
     css`
       height: 100%;
       left: 0;
       top: 0;
     `};
     ${!isFullscreen &&
     css`
       left: ${position.left}px;
       top: ${position.top}px;
       ${size.height && `height: 100%`};
     `};
     min-height: ${minSize.height}px;
     min-width: ${minSize.width}px;
     position: absolute;
     width: 100%;
   `}
`;

export { DialogContainerComponentStyled };
