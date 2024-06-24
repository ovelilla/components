type ThumbMouseMoveEventHandlerPropsType = {
  contentRef: React.RefObject<HTMLDivElement>;
  event: MouseEvent;
  initialPointerY: number;
  initialScrollTop: number;
  isDragging: boolean;
  thumbRef: React.RefObject<HTMLDivElement>;
  trackRef: React.RefObject<HTMLDivElement>;
};

export { ThumbMouseMoveEventHandlerPropsType };
