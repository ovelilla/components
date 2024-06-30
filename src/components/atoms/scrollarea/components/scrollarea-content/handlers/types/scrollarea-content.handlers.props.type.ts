// Vendors
import { Dispatch, SetStateAction } from 'react';

type ScrollareaContentHandlersPropsType = {
  contentRef: React.RefObject<HTMLDivElement>;
  hideDelay: number;
  setShowScrollbar: Dispatch<SetStateAction<boolean>>;
  setThumbTranslateY: Dispatch<SetStateAction<number>>;
  thumbRef: React.RefObject<HTMLDivElement>;
  timerRef: React.MutableRefObject<number | null>;
  trackRef: React.RefObject<HTMLDivElement>;
};

export { ScrollareaContentHandlersPropsType };
