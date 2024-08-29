type DialogContainerHandlersReturnType = {
  handleAnimationEndEvent: VoidFunction;
  handlePointerDownEvent: (event: React.PointerEvent<HTMLDivElement>) => void;
  handlePointerUpEvent: (event: React.PointerEvent<HTMLDivElement>) => void;
  handleSetInitialPosition: VoidFunction;
};

export { DialogContainerHandlersReturnType };
