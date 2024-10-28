// Vendors
import { Dispatch, SetStateAction } from 'react';
// Types
import { ButtonComponentPropsType } from 'components/atoms/button/types/button.component.props.type';
import { TitleComponentPropsType } from 'components/atoms/title/types/title.component.props.type';
import { TooltipComponentPropsType } from 'components/atoms/tooltip/types/tooltip.component.props.type';

type DialogHeaderComponentPropsType = {
  buttonCloseProps?: {
    buttonProps?: ButtonComponentPropsType;
    tooltipProps?: TooltipComponentPropsType;
  };
  buttonFullscreenProps?: {
    buttonProps?: ButtonComponentPropsType;
    tooltipProps?: TooltipComponentPropsType;
  };
  isFullscreen: boolean;
  onClose: VoidFunction;
  setIsFullscreen: Dispatch<SetStateAction<boolean>>;
  setPosition: Dispatch<SetStateAction<{ left: number; top: number }>>;
  setTranslate: Dispatch<SetStateAction<{ x: number; y: number }>>;
  size: { width: number; height: number | null };
  title?: string;
  titleProps?: TitleComponentPropsType;
  translate: { x: number; y: number };
};

export { DialogHeaderComponentPropsType };
