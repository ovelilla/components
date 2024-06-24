// Vendors
import { Dispatch, SetStateAction } from 'react';

type TrackMouseDownEventHandlerPropsType = {
  contentRef: React.RefObject<HTMLDivElement>;
  event: React.MouseEvent<HTMLDivElement>;
  setInitialScrollTop: Dispatch<SetStateAction<number>>;
  setInitialPointerY: Dispatch<SetStateAction<number>>;
  setIsDragging: Dispatch<SetStateAction<boolean>>;
  thumbRef: React.RefObject<HTMLDivElement>;
  trackRef: React.RefObject<HTMLDivElement>;
};

export { TrackMouseDownEventHandlerPropsType };
