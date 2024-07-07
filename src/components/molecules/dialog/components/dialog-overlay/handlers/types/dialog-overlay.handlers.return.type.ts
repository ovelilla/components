type DialogOverlayHandlersReturnType = {
  handleMouseDownEvent: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleMouseUpEvent: VoidFunction;
  handleTouchStartEvent: VoidFunction;
  handleTouchEndEvent: (event: React.TouchEvent<HTMLDivElement>) => void;
};

export { DialogOverlayHandlersReturnType };
