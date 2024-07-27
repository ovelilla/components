// Enums
import { TooltipComponentPlacementEnum } from '../../enums/tooltip.component.enums';

type TooltipHookReturnType = {
  arrowPosition: { left: number; top: number };
  contentRef: React.RefObject<HTMLDivElement>;
  handleMouseEnterEvent: VoidFunction;
  handleMouseLeaveEvent: VoidFunction;
  handleTouchEndEvent: VoidFunction;
  handleTouchStartEvent: VoidFunction;
  placement: TooltipComponentPlacementEnum;
  tooltipPosition: { left: number; top: number };
  triggerRef: React.RefObject<HTMLDivElement>;
  visible: boolean;
};

export { TooltipHookReturnType };
