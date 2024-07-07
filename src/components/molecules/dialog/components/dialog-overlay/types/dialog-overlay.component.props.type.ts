// Vendors
import { Dispatch, SetStateAction } from 'react';

type DialogOverlayComponentPropsType = {
  animationDuration: number;
  children: React.ReactNode;
  hasAnimation: boolean;
  onClose: VoidFunction;
  overlayRef: React.RefObject<HTMLDivElement>;
  setShouldClose: Dispatch<SetStateAction<boolean>>;
  shouldClose: boolean;
};

export { DialogOverlayComponentPropsType };
