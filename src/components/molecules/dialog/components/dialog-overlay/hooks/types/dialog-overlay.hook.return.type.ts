type DialogOverlayHookReturnType = {
  handleAnimationEndEvent: VoidFunction;
  handlePointerDownEvent: (event: React.PointerEvent<HTMLDivElement>) => void;
  handlePointerUpEvent: VoidFunction;
  overlayRef: React.RefObject<HTMLDivElement>;
  shouldRender: boolean;
};

export { DialogOverlayHookReturnType };
