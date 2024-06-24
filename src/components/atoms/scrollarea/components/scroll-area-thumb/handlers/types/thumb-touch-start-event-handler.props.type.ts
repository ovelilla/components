// Vendors
import { Dispatch, SetStateAction } from 'react';

type ThumbTouchStartEventHandlerPropsType = {
  contentRef: React.RefObject<HTMLDivElement>;
  event: React.TouchEvent<HTMLDivElement>;
  setInitialScrollTop: Dispatch<SetStateAction<number>>;
  setInitialPointerY: Dispatch<SetStateAction<number>>;
  setIsDragging: Dispatch<SetStateAction<boolean>>;
  thumbRef: React.RefObject<HTMLDivElement>;
  trackRef: React.RefObject<HTMLDivElement>;
};

export { ThumbTouchStartEventHandlerPropsType };
