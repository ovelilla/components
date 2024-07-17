// Vendors
import { useLayoutEffect, useRef, useState } from 'react';
// Enums
import { TooltipComponentPlacementEnum } from '../enums/tooltip.component.enums';
// Handlers
import { TooltipHandlers } from '../handlers/tooltip.handlers';
// Types
import { TooltipHookPropsType } from './types/tooltip.hook.props.type';
import { TooltipHookReturnType } from './types/tooltip.hook.return.type';
// Utils
import { getArrowPosition, getTooltipPlacement, getTooltipPosition } from '../utils/tooltip.utils';

const TooltipHook = ({
  arrowSize,
  gap,
  hideDelay,
  initialPlacement,
  showArrow,
  showDelay,
}: TooltipHookPropsType): TooltipHookReturnType => {
  const [arrowPosition, setArrowPosition] = useState<{ left: number; top: number }>({
    left: 0,
    top: 0,
  });
  const [isTouch, setIsTouch] = useState<boolean>(false);
  const [placement, setPlacement] = useState<TooltipComponentPlacementEnum>(initialPlacement);
  const [tooltipPosition, setTooltipPosition] = useState<{ left: number; top: number }>({
    left: 0,
    top: 0,
  });
  const [visible, setVisible] = useState<boolean>(false);

  const contentRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const hideTimeRef = useRef<number | null>(null);
  const showTimeRef = useRef<number | null>(null);

  const {
    handleMouseEnterEvent,
    handleMouseLeaveEvent,
    handleTouchStartEvent,
    handleTouchEndEvent,
  } = TooltipHandlers({
    hideDelay,
    hideTimeRef,
    isTouch,
    setIsTouch,
    setVisible,
    showDelay,
    showTimeRef,
  });

  useLayoutEffect(() => {
    if (visible) {
      setPlacement(
        getTooltipPlacement({ contentRef, gap, placement: initialPlacement, triggerRef })
      );
    }
  }, [gap, initialPlacement, visible]);

  useLayoutEffect(() => {
    if (visible) {
      setTooltipPosition(getTooltipPosition({ contentRef, gap, placement, triggerRef }));
    }
  }, [gap, placement, visible]);

  useLayoutEffect(() => {
    if (showArrow && visible) {
      setArrowPosition(getArrowPosition({ arrowSize, contentRef, placement, triggerRef }));
    }
  }, [arrowSize, placement, showArrow, tooltipPosition, visible]);

  return {
    arrowPosition,
    contentRef,
    handleMouseEnterEvent,
    handleMouseLeaveEvent,
    handleTouchEndEvent,
    handleTouchStartEvent,
    placement,
    tooltipPosition,
    triggerRef,
    visible,
  };
};

export { TooltipHook };
