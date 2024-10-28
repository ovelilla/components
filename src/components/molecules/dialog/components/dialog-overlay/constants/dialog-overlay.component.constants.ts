// Enums
import { DialogOverlayComponentOpacityEnum } from '../enums/dialog-overlay.component.enums';

const DEFAULT_ANIMATION = {
  active: true,
  duration: 0.3,
  type: 'fade',
} as const;

const DEFAULT_STYLE = {
  opacity: DialogOverlayComponentOpacityEnum.MEDIUM,
} as const;

export { DEFAULT_ANIMATION, DEFAULT_STYLE };
