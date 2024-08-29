// Vendors
import { Dispatch, SetStateAction } from 'react';

type ScrollareaThumbHookPropsType = {
  contentRef: React.RefObject<HTMLDivElement>;
  setIsDragging: Dispatch<SetStateAction<boolean>>;
  trackRef: React.RefObject<HTMLDivElement>;
};

export { ScrollareaThumbHookPropsType };
