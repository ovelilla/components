// Vendors
import { Dispatch, SetStateAction } from 'react';
// Enums
import { DialogOverlayComponentOpacityEnum } from '../enums/dialog-overlay.component.enums';

type DialogOverlayComponentPropsType = {
  animation?: {
    active?: boolean;
    duration?: number;
  };
  children: React.ReactNode;
  onClose: VoidFunction;
  setShouldClose: Dispatch<SetStateAction<boolean>>;
  shouldClose: boolean;
  style?: {
    opacity?: DialogOverlayComponentOpacityEnum;
  };
};

export { DialogOverlayComponentPropsType };
