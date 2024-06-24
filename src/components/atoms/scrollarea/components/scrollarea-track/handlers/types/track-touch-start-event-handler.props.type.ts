// Vendors
import { Dispatch, SetStateAction } from 'react';

type TrackTouchStartEventHandlerPropsType = {
  contentRef: React.RefObject<HTMLDivElement>;
  event: React.TouchEvent<HTMLDivElement>;
  setInitialPointerY: Dispatch<SetStateAction<number>>;
  setInitialScrollTop: Dispatch<SetStateAction<number>>;
  setIsDragging: Dispatch<SetStateAction<boolean>>;
  thumbRef: React.RefObject<HTMLDivElement>;
  trackRef: React.RefObject<HTMLDivElement>;
};

export { TrackTouchStartEventHandlerPropsType };
