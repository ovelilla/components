// Vendors
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
// Constants
import { EXCLUDED_PROPS } from './constants/dialog-overlay.component.styled.constants';
// Types
import { DialogOverlayComponentStyledPropsType } from './types/dialog-overlay.component.styled.props.type';
// Utils
import { getOpacity } from './utils/dialog.component.styled.utils';

const DialogOverlayComponentStyled = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !EXCLUDED_PROPS.includes(prop),
})<DialogOverlayComponentStyledPropsType>`
  ${({ opacity, theme }) => css`
    background-color: rgba(0, 0, 0, ${getOpacity({ opacity, theme })});
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
  `}
`;

export { DialogOverlayComponentStyled };
