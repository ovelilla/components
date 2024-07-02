// Enums
import {
  TooltipComponentArrowSizeEnum,
  TooltipComponentBorderRadiusEnum,
  TooltipComponentFontSizeEnum,
  TooltipComponentFontWeightEnum,
  TooltipComponentGapEnum,
  TooltipComponentOpacityEnum,
  TooltipComponentPaddingEnum,
  TooltipComponentSizeEnum,
  TooltipComponentPlacementEnum,
} from '../enums/tooltip.component.enums';

type TooltipComponentPropsType = {
  arrowSize?: TooltipComponentArrowSizeEnum;
  borderRadius?: TooltipComponentBorderRadiusEnum;
  children: React.ReactNode;
  fontSize?: TooltipComponentFontSizeEnum;
  fontWeight?: TooltipComponentFontWeightEnum;
  gap?: TooltipComponentGapEnum;
  hideDelay?: number;
  opacity?: TooltipComponentOpacityEnum;
  padding?: TooltipComponentPaddingEnum;
  placement?: TooltipComponentPlacementEnum;
  showArrow?: boolean;
  showDelay?: number;
  size?: TooltipComponentSizeEnum;
  title?: string;
};

export { TooltipComponentPropsType };
