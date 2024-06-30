// Enums
import {
  TooltipComponentBorderRadiusEnum,
  TooltipComponentFontSizeEnum,
  TooltipComponentFontWeightEnum,
  TooltipComponentOpacityEnum,
  TooltipComponentPaddingEnum,
  TooltipComponentSizeEnum,
  TooltipComponentPlacementEnum,
} from '../enums/tooltip.component.enums';

type TooltipComponentPropsType = {
  borderRadius?: TooltipComponentBorderRadiusEnum;
  children: React.ReactNode;
  fontSize?: TooltipComponentFontSizeEnum;
  fontWeight?: TooltipComponentFontWeightEnum;
  gap?: number;
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
