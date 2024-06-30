type TooltipHookReturnType = {
  handleMouseEnterEvent: VoidFunction;
  handleMouseLeaveEvent: VoidFunction;
  tooltipPosition: { left: number; top: number };
  contentRef: React.RefObject<HTMLDivElement>;
  triggerRef: React.RefObject<HTMLDivElement>;
  visible: boolean;
};

export { TooltipHookReturnType };
