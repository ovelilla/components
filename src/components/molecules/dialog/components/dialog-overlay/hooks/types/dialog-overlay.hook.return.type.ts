type DialogOverlayHookReturnType = {
  handlePointerDownEvent: (event: React.PointerEvent<HTMLDivElement>) => void;
  handlePointerUpEvent: VoidFunction;
  overlayRef: React.RefObject<HTMLDivElement>;
};

export { DialogOverlayHookReturnType };
