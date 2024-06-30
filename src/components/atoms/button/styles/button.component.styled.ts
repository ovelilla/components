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
  getButtonBackgroundColor,
  getButtonColor,
  getButtonFontSize,
  getButtonFontWeight,
  getButtonGap,
  getButtonHeight,
  getButtonHoverBackgroundColor,
  getButtonHoverColor,
  getButtonOpacity,
  getButtonPadding,
  getButtonVisibility,
  getButtonWidth,
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
    background-color: ${getButtonBackgroundColor({ theme, variant })};
    border-radius: ${getBorderRadius({ borderRadius, shape, theme })};
    border: ${getBorder({ theme, variant })};
    color: ${getButtonColor({ theme, variant })};
    cursor: pointer;
    display: flex;
    flex-shrink: 0;
    font-size: ${getButtonFontSize({ fontSize, theme })};
    font-weight: ${getButtonFontWeight({ fontWeight, theme })};
    gap: ${getButtonGap({ gap, theme })};
    height: ${getButtonHeight({ size, theme })};
    justify-content: ${getAlignment({ alignment })};
    line-height: 1;
    opacity: ${getButtonOpacity({ disabled, opacity, theme })};
    padding: 0 ${getButtonPadding({ padding, shape, size, theme })};
    text-decoration: none;
    visibility: ${getButtonVisibility({ variant, theme })};
    white-space: nowrap;
    width: ${getButtonWidth({ fullWidth, shape, size, theme })};

    &:hover {
      background-color: ${getButtonHoverBackgroundColor({ theme, variant })};
      color: ${getButtonHoverColor({ theme, variant })};
    }

    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  `}
`;

export { ButtonComponentStyled };
