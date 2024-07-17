// Vendors
import { Dispatch, SetStateAction } from 'react';

type DialogContainerHookReturnType = {
  contentRef: React.RefObject<HTMLDivElement>;
  handleMouseDownEvent: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleMouseUpEvent: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleTouchEndEvent: (event: React.TouchEvent<HTMLDivElement>) => void;
  handleTouchStartEvent: (event: React.TouchEvent<HTMLDivElement>) => void;
  isFullScreen: boolean;
  position: { left: number; top: number };
  setIsFullScreen: Dispatch<SetStateAction<boolean>>;
  setPosition: Dispatch<SetStateAction<{ left: number; top: number }>>;
  setSize: Dispatch<SetStateAction<{ width: number; height: number | null }>>;
  setTranslate: Dispatch<SetStateAction<{ x: number; y: number }>>;
  size: { width: number; height: number | null };
  translate: { x: number; y: number };
};

export { DialogContainerHookReturnType };
