// Vendors
import { Dispatch, SetStateAction } from 'react';

type DialogContentHookReturnType = {
  contentRef: React.RefObject<HTMLDivElement>;
  handleMouseDownEvent: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleMouseUpEvent: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleTouchEndEvent: (event: React.TouchEvent<HTMLDivElement>) => void;
  handleTouchStartEvent: (event: React.TouchEvent<HTMLDivElement>) => void;
  position: { x: number; y: number };
  setTranslate: Dispatch<SetStateAction<{ x: number; y: number }>>;
  translate: { x: number; y: number };
};

export { DialogContentHookReturnType };
