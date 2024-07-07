type DialogContentHandlersReturnType = {
  handleMouseDownEvent: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleMouseUpEvent: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleSetInitialPosition: VoidFunction;
  handleTouchStartEvent: (event: React.TouchEvent<HTMLDivElement>) => void;
  handleTouchEndEvent: (event: React.TouchEvent<HTMLDivElement>) => void;
};

export { DialogContentHandlersReturnType };
