// Vendors
import { Dispatch, SetStateAction } from 'react';

type ScrollareaThumbHookPropsType = {
  contentRef: React.RefObject<HTMLDivElement>;
  initialPointerY: number;
  initialScrollTop: number;
  isDragging: boolean;
  setInitialPointerY: Dispatch<SetStateAction<number>>;
  setInitialScrollTop: Dispatch<SetStateAction<number>>;
  setIsDragging: Dispatch<SetStateAction<boolean>>;
  setThumbHeight: Dispatch<SetStateAction<number>>;
  setThumbTranslateY: Dispatch<SetStateAction<number>>;
  thumbRef: React.RefObject<HTMLDivElement>;
  trackRef: React.RefObject<HTMLDivElement>;
};

export { ScrollareaThumbHookPropsType };
