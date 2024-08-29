// Vendors
import { Dispatch, SetStateAction } from 'react';

type ScrollareaThumbHandlersPropsType = {
  contentRef: React.RefObject<HTMLDivElement>;
  setIsDragging: Dispatch<SetStateAction<boolean>>;
  trackRef: React.RefObject<HTMLDivElement>;
};

export { ScrollareaThumbHandlersPropsType };
