// Vendors
import styled, { css } from 'styled-components';
// Constants
import { EXCLUDED_PROPS } from './constants/button.component.styled.constants';
// Types
import { ButtonComponentStyledPropsType } from './types/button.component.styled.props.type';
// Utils
import {
  getAlignment,
  getBorder,
  getBorderRadius,
  getBackgroundColor,
  getColor,
  getFontSize,
  getFontWeight,
  getGap,
  getHeight,
  getHoverBackgroundColor,
  getHoverColor,
  getOpacity,
  getPadding,
  getVisibility,
  getWidth,
} from './utils/button.component.styled.utils';

const ButtonComponentStyled = styled.button.withConfig({
  shouldForwardProp: (prop) => !EXCLUDED_PROPS.includes(prop),
})<ButtonComponentStyledPropsType>`
  ${({
    alignment,
    borderRadius,
    disabled,
    fontSize,
    fontWeight,
    fullWidth,
    gap,
    opacity,
    padding,
    shape,
    size,
    theme,
    variant,
  }) => css`
    align-items: center;
    background-color: ${getBackgroundColor({ theme, variant })};
    border-radius: ${getBorderRadius({ borderRadius, shape, theme })};
    border: ${getBorder({ theme, variant })};
    color: ${getColor({ theme, variant })};
    cursor: pointer;
    display: flex;
    flex-shrink: 0;
    font-size: ${getFontSize({ fontSize, theme })};
    font-weight: ${getFontWeight({ fontWeight, theme })};
    gap: ${getGap({ gap, theme })};
    height: ${getHeight({ size, theme })};
    justify-content: ${getAlignment({ alignment })};
    line-height: 1;
    opacity: ${getOpacity({ disabled, opacity, theme })};
    padding: 0 ${getPadding({ padding, shape, size, theme })};
    text-decoration: none;
    visibility: ${getVisibility({ variant, theme })};
    white-space: nowrap;
    width: ${getWidth({ fullWidth, shape, size, theme })};

    &:hover {
      background-color: ${getHoverBackgroundColor({ theme, variant })};
      color: ${getHoverColor({ theme, variant })};
    }

    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  `}
`;

export { ButtonComponentStyled };
