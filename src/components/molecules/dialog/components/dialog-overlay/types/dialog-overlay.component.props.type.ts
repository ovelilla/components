// Vendors
import { Dispatch, SetStateAction } from 'react';
// Enums
import { DialogOverlayComponentOpacityEnum } from '../enums/dialog-overlay.component.enums';

type DialogOverlayComponentPropsType = {
  animationDuration: number;
  children: React.ReactNode;
  hasAnimation: boolean;
  onClose: VoidFunction;
  opacity?: DialogOverlayComponentOpacityEnum;
  overlayRef: React.RefObject<HTMLDivElement>;
  setShouldClose: Dispatch<SetStateAction<boolean>>;
  shouldClose: boolean;
};

export { DialogOverlayComponentPropsType };
