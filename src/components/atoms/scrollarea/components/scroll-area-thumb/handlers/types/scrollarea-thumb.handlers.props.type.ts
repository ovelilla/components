// Vendors
import { Dispatch, SetStateAction } from 'react';

type ScrollareaThumbHandlersPropsType = {
  contentRef: React.RefObject<HTMLDivElement>;
  initialScrollTop: number;
  initialPointerY: number;
  isDragging: boolean;
  setInitialScrollTop: Dispatch<SetStateAction<number>>;
  setInitialPointerY: Dispatch<SetStateAction<number>>;
  setIsDragging: Dispatch<SetStateAction<boolean>>;
  setThumbHeight: Dispatch<SetStateAction<number>>;
  setThumbTranslateY: Dispatch<SetStateAction<number>>;
  thumbRef: React.RefObject<HTMLDivElement>;
  trackRef: React.RefObject<HTMLDivElement>;
};

export { ScrollareaThumbHandlersPropsType };
