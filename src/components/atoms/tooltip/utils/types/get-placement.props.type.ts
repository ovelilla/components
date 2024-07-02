// Enums
import {
  TooltipComponentGapEnum,
  TooltipComponentPlacementEnum,
} from '../../enums/tooltip.component.enums';

type GetPlacementPropsType = {
  contentRef: React.RefObject<HTMLDivElement>;
  gap: TooltipComponentGapEnum;
  placement: TooltipComponentPlacementEnum;
  triggerRef: React.RefObject<HTMLDivElement>;
};

export type { GetPlacementPropsType };
