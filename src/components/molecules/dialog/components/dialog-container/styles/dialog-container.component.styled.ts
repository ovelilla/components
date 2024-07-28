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
  .attrs<DialogContainerComponentStyledPropsType>(({ isFullscreen, translate }) => ({
    style: {
      transform: isFullscreen ? 'none' : `translate(${translate.x}px, ${translate.y}px)`,
    },
  }))`
  ${({ isFullscreen, position, size }) => css`
    ${!isFullscreen && size.height && `max-height: ${size.height}px;`}
    ${!isFullscreen && size.width && `max-width: ${size.width}px;`}
    height: ${isFullscreen ? '100%' : 'auto'};
    left: ${isFullscreen ? 0 : position.left}px;
    position: absolute;
    top: ${isFullscreen ? 0 : position.top}px;
    width: ${isFullscreen ? '100%' : 'auto'};

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    }
  `}
`;

export { DialogContainerComponentStyled };
