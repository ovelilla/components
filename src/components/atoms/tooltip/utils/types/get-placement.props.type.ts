// Enums
import { TooltipComponentPlacementEnum } from '../../enums/tooltip.component.enums';

type GetPlacementPropsType = {
  contentRef: React.RefObject<HTMLDivElement>;
  gap: number;
  placement: TooltipComponentPlacementEnum;
  triggerRef: React.RefObject<HTMLDivElement>;
};

export type { GetPlacementPropsType };
