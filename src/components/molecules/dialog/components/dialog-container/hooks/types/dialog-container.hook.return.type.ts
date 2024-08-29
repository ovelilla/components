// Vendors
import { Dispatch, SetStateAction } from 'react';

type DialogContainerHookReturnType = {
  containerRef: React.RefObject<HTMLDivElement>;
  handlePointerDownEvent: (event: React.PointerEvent<HTMLDivElement>) => void;
  handlePointerUpEvent: (event: React.PointerEvent<HTMLDivElement>) => void;
  isFullscreen: boolean;
  minSize: { width: number; height: number };
  position: { left: number; top: number };
  setIsFullscreen: Dispatch<SetStateAction<boolean>>;
  setPosition: Dispatch<SetStateAction<{ left: number; top: number }>>;
  setSize: Dispatch<SetStateAction<{ width: number; height: number | null }>>;
  setTranslate: Dispatch<SetStateAction<{ x: number; y: number }>>;
  size: { width: number; height: number | null };
  translate: { x: number; y: number };
};

export { DialogContainerHookReturnType };
