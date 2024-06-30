// Vendors
import styled, { css } from 'styled-components';
// Constants
import { EXCLUDED_PROPS } from './constants/tooltip.component.styled.constants';
// Types
import { TooltipComponentStyledPropsType } from './types/tooltip.component.styled.props.type';
// Utils
import {
  getBorderRadius,
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
  ${({ borderRadius, fontSize, fontWeight, opacity, padding, tooltipPosition, size, theme }) => css`
    background-color: hsl(${theme.colors.primary} / ${getTooltipOpacity({ opacity, theme })});
    backdrop-filter: blur(4px);
    border-radius: ${getBorderRadius({ borderRadius, theme })};
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
      /* border-color: hsl(${theme.colors.primary} / ${getTooltipOpacity({ opacity, theme })})
        transparent transparent transparent; */
      border-color: transparent transparent
        hsl(${theme.colors.primary} / ${getTooltipOpacity({ opacity, theme })}) transparent;
      border-style: solid;
      border-width: 10px;
      content: '';
      left: 50%;
      position: absolute;
      /* top: 100%; */
      bottom: 100%;
      transform: translateX(-50%);
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
