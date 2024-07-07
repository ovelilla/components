// Vendors
import { Dispatch, SetStateAction } from 'react';
// Enums
import {
  DialogContentComponentBorderRadiusEnum,
  DialogContentComponentPaddingEnum,
} from '../enums/dialog-content.component.enums';

type DialogContentComponentPropsType = {
  animationDuration: number;
  borderRadius: DialogContentComponentBorderRadiusEnum;
  children: React.ReactNode;
  contentRef: React.RefObject<HTMLDivElement>;
  hasAnimation: boolean;
  maxWidth: number;
  onClose: VoidFunction;
  padding: DialogContentComponentPaddingEnum;
  setShouldClose: Dispatch<SetStateAction<boolean>>;
  showCloseButton: boolean;
  showFullScreenButton: boolean;
  showTooltips: boolean;
  title?: string;
};

export { DialogContentComponentPropsType };
