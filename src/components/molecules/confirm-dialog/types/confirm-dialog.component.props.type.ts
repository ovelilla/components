// Enums
import {
  DialogContainerComponentBorderRadiusEnum,
  DialogContainerComponentPaddingEnum,
} from 'components/molecules/dialog/components/dialog-container/enums/dialog-container.component.enums';
import { DialogOverlayComponentOpacityEnum } from 'components/molecules/dialog/components/dialog-overlay/enums/dialog-overlay.component.enums';
// Types
import { ButtonComponentPropsType } from 'components/atoms/button/types/button.component.props.type';
import { TooltipComponentPropsType } from 'components/atoms/tooltip/types/tooltip.component.props.type';

type ConfirmDialogComponentPropsType = {
  animation?: {
    container?: { active?: boolean; duration?: number; timingFunction?: string };
    overlay?: { active?: boolean; duration?: number; timingFunction?: string };
  };
  buttonCancelProps?: ButtonComponentPropsType;
  buttonCloseProps?: {
    buttonProps?: ButtonComponentPropsType;
    tooltipProps?: TooltipComponentPropsType;
  };
  buttonConfirmProps?: ButtonComponentPropsType;
  buttonFullscreenProps?: {
    buttonProps?: ButtonComponentPropsType;
    tooltipProps?: TooltipComponentPropsType;
  };
  isFullscreen?: boolean;
  message?: string;
  minSize?: { height?: number; width?: number };
  onCancel: VoidFunction;
  onClose: VoidFunction;
  onConfirm: VoidFunction;
  open: boolean;
  position?: { left?: number; top?: number };
  size?: { height?: number; width?: number };
  style?: {
    container?: {
      borderRadius?: DialogContainerComponentBorderRadiusEnum;
      padding?: DialogContainerComponentPaddingEnum;
    };
    overlay?: { opacity?: DialogOverlayComponentOpacityEnum };
  };
  title?: string;
};

export { ConfirmDialogComponentPropsType };
