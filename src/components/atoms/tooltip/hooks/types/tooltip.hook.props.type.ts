// Enums
import {
  TooltipComponentArrowSizeEnum,
  TooltipComponentGapEnum,
  TooltipComponentPlacementEnum,
} from '../../enums/tooltip.component.enums';

type TooltipHookPropsType = {
  arrowSize: TooltipComponentArrowSizeEnum;
  gap: TooltipComponentGapEnum;
  hideDelay: number;
  initialPlacement: TooltipComponentPlacementEnum;
  showArrow: boolean;
  showDelay: number;
};

export { TooltipHookPropsType };
