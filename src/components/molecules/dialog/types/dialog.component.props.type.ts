// Enums
import {
  DialogContentComponentBorderRadiusEnum,
  DialogContentComponentPaddingEnum,
} from '../components/dialog-content/enums/dialog-content.component.enums';

type DialogComponentPropsType = {
  animationDuration?: number;
  children: React.ReactNode;
  contentBorderRadius?: DialogContentComponentBorderRadiusEnum;
  contentPadding?: DialogContentComponentPaddingEnum;
  hasAnimation?: boolean;
  maxWidth?: number;
  onClose: VoidFunction;
  open: boolean;
  showCloseButton?: boolean;
  showFullScreenButton?: boolean;
  showTooltips?: boolean;
  title?: string;
};

export { DialogComponentPropsType };
