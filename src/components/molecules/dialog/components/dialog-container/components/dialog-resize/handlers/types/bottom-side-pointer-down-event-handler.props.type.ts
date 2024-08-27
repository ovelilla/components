// Vendors
import { Dispatch, SetStateAction } from 'react';

type BottomSidePointerDownEventHandlerPropsType = {
  event: React.PointerEvent<HTMLDivElement>;
  isFullscreen: boolean;
  minSize: { width: number; height: number };
  setSize: Dispatch<SetStateAction<{ width: number; height: number | null }>>;
  size: { width: number; height: number | null };
};

export { BottomSidePointerDownEventHandlerPropsType };
