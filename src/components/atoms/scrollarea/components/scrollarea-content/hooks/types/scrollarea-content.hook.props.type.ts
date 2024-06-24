// Vendors
import { Dispatch, SetStateAction } from 'react';

type ScrollareaContentHookPropsType = {
  contentRef: React.RefObject<HTMLDivElement>;
  setThumbTranslateY: Dispatch<SetStateAction<number>>;
  thumbRef: React.RefObject<HTMLDivElement>;
  trackRef: React.RefObject<HTMLDivElement>;
};

export { ScrollareaContentHookPropsType };
