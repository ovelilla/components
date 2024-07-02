// Vendors
import { DefaultTheme } from 'styled-components';
// Enums
import {
  TooltipComponentBorderRadiusEnum,
  TooltipComponentFontSizeEnum,
  TooltipComponentFontWeightEnum,
  TooltipComponentOpacityEnum,
  TooltipComponentPaddingEnum,
  TooltipComponentPlacementEnum,
  TooltipComponentSizeEnum,
} from '../../enums/tooltip.component.enums';

type TooltipComponentStyledPropsType = {
  arrowPosition: { left: number; top: number };
  borderRadius: TooltipComponentBorderRadiusEnum;
  fontSize: TooltipComponentFontSizeEnum;
  fontWeight: TooltipComponentFontWeightEnum;
  opacity: TooltipComponentOpacityEnum;
  padding: TooltipComponentPaddingEnum;
  placement: TooltipComponentPlacementEnum;
  size: TooltipComponentSizeEnum;
  theme: DefaultTheme;
  tooltipPosition: { left: number; top: number };
};

export { TooltipComponentStyledPropsType };
