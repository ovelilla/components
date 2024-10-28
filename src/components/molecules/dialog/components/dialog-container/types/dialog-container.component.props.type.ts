// Vendors
import { Dispatch, SetStateAction } from 'react';
// Enums
import {
  DialogContainerComponentBorderRadiusEnum,
  DialogContainerComponentPaddingEnum,
} from '../enums/dialog-container.component.enums';
// Types
import { ButtonComponentPropsType } from 'components/atoms/button/types/button.component.props.type';
import { TitleComponentPropsType } from 'components/atoms/title/types/title.component.props.type';
import { TooltipComponentPropsType } from 'components/atoms/tooltip/types/tooltip.component.props.type';

type DialogContainerComponentPropsType = {
  animation?: { active?: boolean; duration?: number; timingFunction?: string };
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
  minSize?: { width?: number; height?: number };
  onClose: VoidFunction;
  open: boolean;
  position?: { left?: number; top?: number };
  setShouldClose: Dispatch<SetStateAction<boolean>>;
  size?: { width?: number; height?: number };
  style?: {
    borderRadius?: DialogContainerComponentBorderRadiusEnum;
    padding?: DialogContainerComponentPaddingEnum;
  };
  title?: string;
  titleProps?: TitleComponentPropsType;
};

export { DialogContainerComponentPropsType };
