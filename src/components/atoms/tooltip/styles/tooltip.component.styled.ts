// Vendors
import styled, { css } from 'styled-components';
// Constants
import { EXCLUDED_PROPS } from './constants/tooltip.component.styled.constants';
// Types
import { TooltipComponentStyledPropsType } from './types/tooltip.component.styled.props.type';
// Utils
import {
  getArrowBorderColor,
  getTooltipBorderRadius,
  getTooltipFontSize,
  getTooltipFontWeight,
  getTooltipOpacity,
  getTooltipXPadding,
  getTooltipYPadding,
} from './utils/tooltip.component.styled.utils';

const TooltipComponentStyled = styled.div``;

const TooltipComponentContentStyled = styled.div.withConfig({
  shouldForwardProp: (prop: string): boolean => !EXCLUDED_PROPS.includes(prop),
})<TooltipComponentStyledPropsType>`
  ${({
    arrowPosition,
    arrowSize,
    borderRadius,
    fontSize,
    fontWeight,
    opacity,
    padding,
    placement,
    showArrow,
    size,
    theme,
    tooltipPosition,
  }) => css`
    backdrop-filter: blur(4px);
    background-color: hsl(${theme.colors.primary} / ${getTooltipOpacity({ opacity, theme })});
    border-radius: ${getTooltipBorderRadius({ borderRadius, theme })};
    color: hsl(${({ theme }) => theme.colors.primaryForeground} / 1);
    font-size: ${getTooltipFontSize({ fontSize, theme })};
    font-weight: ${getTooltipFontWeight({ fontWeight, theme })};
    left: ${tooltipPosition.left}px;
    line-height: 1;
    padding: ${getTooltipXPadding({ padding, size, theme })}
      ${getTooltipYPadding({ padding, size, theme })};
    position: fixed;
    top: ${tooltipPosition.top}px;

    ${showArrow &&
    css`
      &::after {
        border-color: ${getArrowBorderColor({ opacity, placement, theme })};
        border-style: solid;
        border-width: ${arrowSize}px;
        content: '';
        left: ${arrowPosition.left}px;
        pointer-events: none;
        position: absolute;
        top: ${arrowPosition.top}px;
      }
    `};
  `};
`;

const TooltipComponentTitleStyled = styled.div``;

const TooltipComponentTriggerStyled = styled.div``;

export {
  TooltipComponentStyled,
  TooltipComponentContentStyled,
  TooltipComponentTitleStyled,
  TooltipComponentTriggerStyled,
};
