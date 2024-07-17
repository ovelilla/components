// Vendors
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
// Constants
import { EXCLUDED_PROPS } from './constants/dialog-content.component.styled.constants';
// Types
import { DialogContentComponentStyledPropsType } from './types/dialog-content.component.styled.props.type';
// Utils
import { getBorderRadius, getPadding } from './utils/dialog.component.styled.utils';

const DialogContentComponentStyled = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !EXCLUDED_PROPS.includes(prop),
})<DialogContentComponentStyledPropsType>`
  ${({ borderRadius, isFullScreen, padding, theme }) => css`
    background-color: hsl(${theme.colors.background});
    border-radius: ${getBorderRadius({ borderRadius, isFullScreen, theme })};
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    padding: ${getPadding({ padding, theme })};
    width: 100%;
  `}
`;

export { DialogContentComponentStyled };
