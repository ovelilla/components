// Vendors
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
// Constants
import { EXCLUDED_PROPS } from './constants/dialog-content.component.styled.constants';
// Types
import {
  DialogContentComponentStyledPropsType,
  DialogContentComponentAnimatedStyledPropsType,
} from './types/dialog-content.component.styled.props.type';
// Utils
import { getBorderRadius, getPadding } from './utils/dialog.component.styled.utils';

const DialogContentComponentStyled = styled('div')
  .withConfig({
    shouldForwardProp: (prop) => !EXCLUDED_PROPS.includes(prop),
  })
  .attrs<DialogContentComponentStyledPropsType>(({ translate }) => ({
    style: {
      transform: `translate(${translate.x}px, ${translate.y}px)`,
    },
  }))`
  ${({ maxWidth, position }) => css`
    position: absolute;
    top: ${position.y}px;
    left: ${position.x}px;
    max-width: ${maxWidth}px;
    /* transform: translateY(-50%) translateX(-50%); */
  `}
`;

const DialogContentComponentAnimatedStyled = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !EXCLUDED_PROPS.includes(prop),
})<DialogContentComponentAnimatedStyledPropsType>`
  ${({ borderRadius, padding, theme }) => css`
    background-color: hsl(${theme.colors.background});
    border-radius: ${getBorderRadius({ borderRadius, theme })};
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: ${getPadding({ padding, theme })};
  `}
`;

export { DialogContentComponentStyled, DialogContentComponentAnimatedStyled };
