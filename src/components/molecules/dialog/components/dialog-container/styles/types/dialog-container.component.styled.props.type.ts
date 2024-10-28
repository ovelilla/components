// Vendors
import { DefaultTheme } from 'styled-components';
// Enums
import {
  DialogContainerComponentBorderRadiusEnum,
  DialogContainerComponentPaddingEnum,
} from '../../enums/dialog-container.component.enums';

type DialogContainerComponentStyledPropsType = {
  animation?: {
    active?: boolean;
    duration?: number;
    timingFunction?: string;
  };
  borderRadius?: DialogContainerComponentBorderRadiusEnum;
  isFullscreen: boolean;
  minSize: { width: number; height: number };
  open: boolean;
  padding?: DialogContainerComponentPaddingEnum;
  position: { left: number; top: number };
  size: { width: number | null; height: number | null };
  theme: DefaultTheme;
  translate: { x: number; y: number };
};

export { DialogContainerComponentStyledPropsType };
