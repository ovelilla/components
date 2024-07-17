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
  .attrs<DialogContainerComponentStyledPropsType>(({ isFullScreen, translate }) => ({
    style: {
      transform: isFullScreen ? 'none' : `translate(${translate.x}px, ${translate.y}px)`,
    },
  }))`
  ${({ isFullScreen, position, size }) => css`
    ${!isFullScreen && size.height && `max-height: ${size.height}px;`}
    ${!isFullScreen && size.width && `max-width: ${size.width}px;`}
    height: ${isFullScreen ? '100%' : 'auto'};
    left: ${isFullScreen ? 0 : position.left}px;
    position: absolute;
    top: ${isFullScreen ? 0 : position.top}px;
    width: ${isFullScreen ? '100%' : 'auto'};
  `}
`;

export { DialogContainerComponentStyled };
