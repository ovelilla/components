// Vendors
import { useEffect, useRef, useState } from 'react';
// Handlers
import { TooltipHandlers } from '../handlers/tooltip.handlers';
import { TooltipHookPropsType } from './types/tooltip.hook.props.type';
import { TooltipHookReturnType } from './types/tooltip.hook.return.type';
// Utils
import { getTooltipPosition } from '../utils/tooltip.utils';

const TooltipHook = ({
  gap,
  hideDelay,
  placement,
  showDelay,
}: TooltipHookPropsType): TooltipHookReturnType => {
  const [arrowPosition, setArrowPosition] = useState<{ left: number; top: number }>({
    left: 0,
    top: 0,
  });
  const [visible, setVisible] = useState<boolean>(false);
  const [tooltipPosition, setTooltipPosition] = useState<{ left: number; top: number }>({
    left: 0,
    top: 0,
  });

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
