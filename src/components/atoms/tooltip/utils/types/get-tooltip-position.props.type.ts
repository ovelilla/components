// Enums
import { TooltipComponentPlacementEnum } from 'components/atoms/tooltip/enums/tooltip.component.enums';

type GetTooltipPositionPropsType = {
  contentRef: React.RefObject<HTMLDivElement>;
  gap: number;
  placement: TooltipComponentPlacementEnum;
  triggerRef: React.RefObject<HTMLDivElement>;
};

export { GetTooltipPositionPropsType };
