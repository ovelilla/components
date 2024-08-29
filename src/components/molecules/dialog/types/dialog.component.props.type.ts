// Enums
import {
  DialogContainerComponentBorderRadiusEnum,
  DialogContainerComponentPaddingEnum,
} from '../components/dialog-container/enums/dialog-container.component.enums';
import { DialogOverlayComponentOpacityEnum } from '../components/dialog-overlay/enums/dialog-overlay.component.enums';
// Types
import { ButtonComponentPropsType } from 'components/atoms/button/types/button.component.props.type';
import { TooltipComponentPropsType } from 'components/atoms/tooltip/types/tooltip.component.props.type';

type DialogComponentPropsType = {
  animation?: {
    container?: { active?: boolean; duration?: number; type?: string };
    overlay?: { active?: boolean; duration?: number; type?: string };
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
  minSize?: { height?: number; width?: number };
  onClose: VoidFunction;
  open: boolean;
  position?: { left?: number; top?: number };
  size?: { height?: number; width?: number };
  style?: {
    content?: {
      borderRadius?: DialogContainerComponentBorderRadiusEnum;
      padding?: DialogContainerComponentPaddingEnum;
    };
    overlay?: { opacity?: DialogOverlayComponentOpacityEnum };
  };
  title?: string;
};

export { DialogComponentPropsType };
