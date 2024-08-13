// Vendors
import { Dispatch, SetStateAction } from 'react';
// Enums
import {
  DialogContentComponentBorderRadiusEnum,
  DialogContentComponentPaddingEnum,
} from '../components/dialog-content/enums/dialog-content.component.enums';
// Types
import { ButtonComponentPropsType } from 'components/atoms/button/types/button.component.props.type';
import { TooltipComponentPropsType } from 'components/atoms/tooltip/types/tooltip.component.props.type';

type DialogContainerComponentPropsType = {
  animation?: {
    active?: boolean;
    duration?: number;
  };

  buttonCloseProps?: {
    buttonProps?: ButtonComponentPropsType;
    tooltipProps?: TooltipComponentPropsType;
  };
  buttonFullscreenProps?: {
    buttonProps?: ButtonComponentPropsType;
    tooltipProps?: TooltipComponentPropsType;
  };
  children: React.ReactNode;
  isFullscreen: boolean;
  onClose: VoidFunction;
  setShouldClose: Dispatch<SetStateAction<boolean>>;
  size?: { width?: number; height?: number };
  style?: {
    borderRadius?: DialogContentComponentBorderRadiusEnum;
    padding?: DialogContentComponentPaddingEnum;
  };
  title?: string;
};

export { DialogContainerComponentPropsType };
