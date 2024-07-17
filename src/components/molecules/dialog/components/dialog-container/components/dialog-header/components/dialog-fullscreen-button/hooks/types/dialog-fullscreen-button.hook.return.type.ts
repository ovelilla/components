type DialogFullscreenButtonHookReturnType = {
  handleClickEvent: VoidFunction;
  handleStopPropagation: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export { DialogFullscreenButtonHookReturnType };
