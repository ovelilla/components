// Enums
import {
  DialogContentComponentBorderRadiusEnum,
  DialogContentComponentPaddingEnum,
} from '../components/dialog-container/components/dialog-content/enums/dialog-content.component.enums';
import { DialogOverlayComponentOpacityEnum } from '../components/dialog-overlay/enums/dialog-overlay.component.enums';
// Types
import { ButtonComponentPropsType } from 'components/atoms/button/types/button.component.props.type';
import { TooltipComponentPropsType } from 'components/atoms/tooltip/types/tooltip.component.props.type';

type DialogComponentPropsType = {
  animationDuration?: number;
  children: React.ReactNode;
  closeButtonProps?: {
    buttonProps?: ButtonComponentPropsType;
    tooltipProps?: TooltipComponentPropsType;
  };
  contentProps?: {
    borderRadius?: DialogContentComponentBorderRadiusEnum;
    maxWidth?: number;
    padding?: DialogContentComponentPaddingEnum;
  };
  fullScreenButtonProps?: {
    buttonProps?: ButtonComponentPropsType;
    tooltipProps?: TooltipComponentPropsType;
  };
  hasAnimation?: boolean;
  onClose: VoidFunction;
  open: boolean;
  overlayProps?: {
    opacity?: DialogOverlayComponentOpacityEnum;
  };
  size?: {
    height?: number;
    width?: number;
  };
  title?: string;
};

export { DialogComponentPropsType };
