// Vendors
import { DefaultTheme } from 'styled-components';
// Enums
import {
  TooltipComponentBorderRadiusEnum,
  TooltipComponentFontSizeEnum,
  TooltipComponentFontWeightEnum,
  TooltipComponentOpacityEnum,
  TooltipComponentPaddingEnum,
  TooltipComponentSizeEnum,
} from '../../enums/tooltip.component.enums';

type TooltipComponentStyledPropsType = {
  borderRadius: TooltipComponentBorderRadiusEnum;
  fontSize: TooltipComponentFontSizeEnum;
  fontWeight: TooltipComponentFontWeightEnum;
  opacity: TooltipComponentOpacityEnum;
  padding: TooltipComponentPaddingEnum;
  tooltipPosition: { left: number; top: number };
  size: TooltipComponentSizeEnum;
  theme: DefaultTheme;
};

export { TooltipComponentStyledPropsType };
