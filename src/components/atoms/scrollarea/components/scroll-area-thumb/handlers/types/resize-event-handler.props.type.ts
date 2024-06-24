// Vendors
import { Dispatch, SetStateAction } from 'react';

type ResizeEventHandlerPropsType = {
  contentRef: React.RefObject<HTMLDivElement>;
  setThumbHeight: Dispatch<SetStateAction<number>>;
  setThumbTranslateY: Dispatch<SetStateAction<number>>;
  thumbRef: React.RefObject<HTMLDivElement>;
  trackRef: React.RefObject<HTMLDivElement>;
};

export { ResizeEventHandlerPropsType };
