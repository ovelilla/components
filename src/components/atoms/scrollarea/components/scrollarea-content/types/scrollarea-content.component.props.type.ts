// Vendors
import { Dispatch, SetStateAction } from 'react';

type ScrollareaContentComponentPropsType = {
  children: React.ReactNode;
  contentRef: React.RefObject<HTMLDivElement>;
  hideDelay: number;
  setShowScrollbar: Dispatch<SetStateAction<boolean>>;
  setThumbTranslateY: Dispatch<SetStateAction<number>>;
  thumbRef: React.RefObject<HTMLDivElement>;
  timerRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>;
  trackRef: React.RefObject<HTMLDivElement>;
};

export { ScrollareaContentComponentPropsType };
