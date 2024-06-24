type ScrollareaThumbHandlersReturnType = {
  handleResizeEvent: VoidFunction;
  handleThumbMouseDownEvent: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleThumbMouseMoveEvent: (event: MouseEvent) => void;
  handleThumbMouseUpEvent: VoidFunction;
  handleThumbTouchStartEvent: (event: React.TouchEvent<HTMLDivElement>) => void;
  handleThumbTouchMoveEvent: (event: TouchEvent) => void;
  handleThumbTouchEndEvent: VoidFunction;
};

export { ScrollareaThumbHandlersReturnType };
