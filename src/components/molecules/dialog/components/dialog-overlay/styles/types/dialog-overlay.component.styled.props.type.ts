// Vendors
import { DefaultTheme } from 'styled-components';
// Enums
import { DialogOverlayComponentOpacityEnum } from '../../enums/dialog-overlay.component.enums';

type DialogOverlayComponentStyledPropsType = {
  animation?: {
    active?: boolean;
    duration?: number;
    timingFunction?: string;
  };
  opacity?: DialogOverlayComponentOpacityEnum;
  open: boolean;
  theme: DefaultTheme;
};

export { DialogOverlayComponentStyledPropsType };
