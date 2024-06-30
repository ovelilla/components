// Vendors
import { useEffect, useRef, useState } from 'react';
// Enums
import { TooltipComponentPlacementEnum } from '../enums/tooltip.component.enums';
// Handlers
import { TooltipHandlers } from '../handlers/tooltip.handlers';
import { TooltipHookPropsType } from './types/tooltip.hook.props.type';
import { TooltipHookReturnType } from './types/tooltip.hook.return.type';
// Utils
import { getPlacement, getTooltipPosition } from '../utils/tooltip.utils';

const TooltipHook = ({
  gap,
  hideDelay,
  initialPlacement,
  showDelay,
}: TooltipHookPropsType): TooltipHookReturnType => {
  const [arrowPosition, setArrowPosition] = useState<{ left: number; top: number }>({
    left: 0,
    top: 0,
  });
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

  const { handleMouseEnterEvent, handleMouseLeaveEvent } = TooltipHandlers({
    hideDelay,
    hideTimeRef,
    setVisible,
    showDelay,
    showTimeRef,
  });

  useEffect(() => {
    if (visible) {
      setPlacement(getPlacement({ contentRef, gap, placement, triggerRef }));
      setTooltipPosition(getTooltipPosition({ contentRef, gap, placement, triggerRef }));
    }
  }, [gap, placement, visible]);

  return {
    handleMouseEnterEvent,
    handleMouseLeaveEvent,
    tooltipPosition,
    contentRef,
    triggerRef,
    visible,
  };
};

export { TooltipHook };
