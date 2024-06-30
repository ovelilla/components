// Vendors
import { Dispatch, SetStateAction } from 'react';

type ScrollareaContentComponentPropsType = {
  children: React.ReactNode;
  hideDelay: number;
  contentRef: React.RefObject<HTMLDivElement>;
  setShowScrollbar: Dispatch<SetStateAction<boolean>>;
  setThumbTranslateY: Dispatch<SetStateAction<number>>;
  thumbRef: React.RefObject<HTMLDivElement>;
  timerRef: React.MutableRefObject<number | null>;
  trackRef: React.RefObject<HTMLDivElement>;
};

export { ScrollareaContentComponentPropsType };
