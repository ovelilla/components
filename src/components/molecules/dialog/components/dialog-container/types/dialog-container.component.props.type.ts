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
  animationDuration: number;
  children: React.ReactNode;
  closeButtonProps?: {
    buttonProps?: ButtonComponentPropsType;
    tooltipProps?: TooltipComponentPropsType;
  };
  contentProps?: {
    borderRadius?: DialogContentComponentBorderRadiusEnum;
    padding?: DialogContentComponentPaddingEnum;
  };
  fullScreenButtonProps?: {
    buttonProps?: ButtonComponentPropsType;
    tooltipProps?: TooltipComponentPropsType;
  };
  hasAnimation: boolean;
  onClose: VoidFunction;
  setShouldClose: Dispatch<SetStateAction<boolean>>;
  size?: { width?: number; height?: number };
  title?: string;
};

export { DialogContainerComponentPropsType };
