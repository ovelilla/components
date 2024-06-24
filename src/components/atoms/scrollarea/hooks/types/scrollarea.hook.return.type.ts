// Vendors
import { Dispatch, SetStateAction } from 'react';

type ScrollareaHookReturnType = {
  contentRef: React.RefObject<HTMLDivElement>;
  handleMouseEnterEvent: VoidFunction;
  handleMouseLeaveEvent: VoidFunction;
  initialPointerY: number;
  initialScrollTop: number;
  isDragging: boolean;
  isHovered: boolean;
  setInitialPointerY: Dispatch<SetStateAction<number>>;
  setInitialScrollTop: Dispatch<SetStateAction<number>>;
  setIsDragging: Dispatch<SetStateAction<boolean>>;
  setThumbHeight: Dispatch<SetStateAction<number>>;
  setThumbTranslateY: Dispatch<SetStateAction<number>>;
  thumbHeight: number;
  thumbRef: React.RefObject<HTMLDivElement>;
  thumbTranslateY: number;
  trackRef: React.RefObject<HTMLDivElement>;
};

export { ScrollareaHookReturnType };
