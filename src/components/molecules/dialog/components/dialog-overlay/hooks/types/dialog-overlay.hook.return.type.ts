type DialogOverlayHookReturnType = {
  handleMouseDownEvent: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleMouseUpEvent: VoidFunction;
  handleTouchStartEvent: VoidFunction;
  handleTouchEndEvent: VoidFunction;
};

export { DialogOverlayHookReturnType };
