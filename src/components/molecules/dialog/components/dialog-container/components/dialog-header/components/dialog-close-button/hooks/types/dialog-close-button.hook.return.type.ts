type DialogCloseButtonHookReturnType = {
  handleClickEvent: VoidFunction;
  handleStopPropagation: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export { DialogCloseButtonHookReturnType };
