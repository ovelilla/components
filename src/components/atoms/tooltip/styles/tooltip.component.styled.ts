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
    borderRadius,
    fontSize,
    fontWeight,
    opacity,
    padding,
    placement,
    tooltipPosition,
    size,
    theme,
  }) => css`
    background-color: hsl(${theme.colors.primary} / ${getTooltipOpacity({ opacity, theme })});
    backdrop-filter: blur(4px);
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

    &::after {
      border-color: ${getArrowBorderColor({ opacity, placement, theme })};
      border-style: solid;
      border-width: 8px;
      content: '';
      left: ${arrowPosition.left}px;
      position: absolute;
      top: ${arrowPosition.top}px;
    }
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
