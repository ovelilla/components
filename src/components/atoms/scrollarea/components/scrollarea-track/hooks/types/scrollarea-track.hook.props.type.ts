// Vendors
import { Dispatch, SetStateAction } from 'react';

type ScrollareaTrackHookPropsType = {
  contentRef: React.RefObject<HTMLDivElement>;
  setInitialScrollTop: Dispatch<SetStateAction<number>>;
  setInitialPointerY: Dispatch<SetStateAction<number>>;
  setIsDragging: Dispatch<SetStateAction<boolean>>;
  thumbRef: React.RefObject<HTMLDivElement>;
  trackRef: React.RefObject<HTMLDivElement>;
};

export { ScrollareaTrackHookPropsType };
