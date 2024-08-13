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
  animation?: {
    container?: {
      active?: boolean;
      duration?: number;
    };
    overlay?: {
      active?: boolean;
      duration?: number;
    };
  };
  children: React.ReactNode;
  buttonCloseProps?: {
    buttonProps?: ButtonComponentPropsType;
    tooltipProps?: TooltipComponentPropsType;
  };
  buttonFullscreenProps?: {
    buttonProps?: ButtonComponentPropsType;
    tooltipProps?: TooltipComponentPropsType;
  };
  isFullscreen?: boolean;
  onClose: VoidFunction;
  open: boolean;
  size?: {
    height?: number;
    width?: number;
  };
  style?: {
    content?: {
      borderRadius?: DialogContentComponentBorderRadiusEnum;
      padding?: DialogContentComponentPaddingEnum;
    };
    overlay?: {
      opacity?: DialogOverlayComponentOpacityEnum;
    };
  };
  title?: string;
};

export { DialogComponentPropsType };
