type DialogCloseButtonHookReturnType = {
  handleClickEvent: VoidFunction;
  handlePointerDownEvent: (event: React.PointerEvent<HTMLDivElement>) => void;
  handlePointerUpEvent: (event: React.PointerEvent<HTMLDivElement>) => void;
};

export { DialogCloseButtonHookReturnType };
