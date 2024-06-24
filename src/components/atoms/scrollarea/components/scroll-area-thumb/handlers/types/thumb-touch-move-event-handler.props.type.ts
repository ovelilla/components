type ThumbTouchMoveEventHandlerPropsType = {
  contentRef: React.RefObject<HTMLDivElement>;
  event: TouchEvent;
  initialPointerY: number;
  initialScrollTop: number;
  isDragging: boolean;
  thumbRef: React.RefObject<HTMLDivElement>;
  trackRef: React.RefObject<HTMLDivElement>;
};

export { ThumbTouchMoveEventHandlerPropsType };
