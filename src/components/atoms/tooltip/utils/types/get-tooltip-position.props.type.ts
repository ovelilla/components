// Enums
import {
  TooltipComponentGapEnum,
  TooltipComponentPlacementEnum,
} from 'components/atoms/tooltip/enums/tooltip.component.enums';

type GetTooltipPositionPropsType = {
  contentRef: React.RefObject<HTMLDivElement>;
  gap: TooltipComponentGapEnum;
  placement: TooltipComponentPlacementEnum;
  triggerRef: React.RefObject<HTMLDivElement>;
};

export { GetTooltipPositionPropsType };
