// Vendors
import { Dispatch, SetStateAction } from 'react';

type ScrollareaHookReturnType = {
  contentRef: React.RefObject<HTMLDivElement>;
  handleMouseEnterEvent: VoidFunction;
  handleMouseLeaveEvent: VoidFunction;
  setIsDragging: Dispatch<SetStateAction<boolean>>;
  setShowScrollbar: Dispatch<SetStateAction<boolean>>;
  setThumbTranslateY: Dispatch<SetStateAction<number>>;
  showScrollbar: boolean;
  thumbHeight: number;
  thumbRef: React.RefObject<HTMLDivElement>;
  thumbTranslateY: number;
  timerRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>;
  trackRef: React.RefObject<HTMLDivElement>;
};

export { ScrollareaHookReturnType };
