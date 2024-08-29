// Vendors
import { Dispatch, SetStateAction } from 'react';

type ThumbPointerDownEventHandlerPropsType = {
  contentRef: React.RefObject<HTMLDivElement>;
  event: React.MouseEvent<HTMLDivElement>;
  setIsDragging: Dispatch<SetStateAction<boolean>>;
  trackRef: React.RefObject<HTMLDivElement>;
};

export { ThumbPointerDownEventHandlerPropsType };
