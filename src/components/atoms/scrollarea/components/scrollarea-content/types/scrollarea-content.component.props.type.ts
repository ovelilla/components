// Vendors
import { Dispatch, SetStateAction } from 'react';

type ScrollareaContentComponentPropsType = {
  children: React.ReactNode;
  contentRef: React.RefObject<HTMLDivElement>;
  setThumbTranslateY: Dispatch<SetStateAction<number>>;
  thumbRef: React.RefObject<HTMLDivElement>;
  trackRef: React.RefObject<HTMLDivElement>;
};

export { ScrollareaContentComponentPropsType };
