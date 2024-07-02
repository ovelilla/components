// Enums
import {
  TooltipComponentArrowSizeEnum,
  TooltipComponentPlacementEnum,
} from 'components/atoms/tooltip/enums/tooltip.component.enums';

type GetArrowPositionPropsType = {
  arrowSize: TooltipComponentArrowSizeEnum;
  contentRef: React.RefObject<HTMLDivElement>;
  placement: TooltipComponentPlacementEnum;
  triggerRef: React.RefObject<HTMLDivElement>;
};

export { GetArrowPositionPropsType };
