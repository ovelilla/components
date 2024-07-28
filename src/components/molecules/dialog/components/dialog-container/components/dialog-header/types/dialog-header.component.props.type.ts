// Vendors
import { Dispatch, SetStateAction } from 'react';
// Types
import { ButtonComponentPropsType } from 'components/atoms/button/types/button.component.props.type';
import { TooltipComponentPropsType } from 'components/atoms/tooltip/types/tooltip.component.props.type';

type DialogHeaderComponentPropsType = {
  closeButtonProps?: {
    buttonProps?: ButtonComponentPropsType;
    tooltipProps?: TooltipComponentPropsType;
  };
  fullScreenButtonProps?: {
    buttonProps?: ButtonComponentPropsType;
    tooltipProps?: TooltipComponentPropsType;
  };
  isFullscreen: boolean;
  onClose: VoidFunction;
  setIsFullscreen: Dispatch<SetStateAction<boolean>>;
  setPosition: Dispatch<SetStateAction<{ left: number; top: number }>>;
  setSize: Dispatch<SetStateAction<{ width: number; height: number | null }>>;
  setTranslate: Dispatch<SetStateAction<{ x: number; y: number }>>;
  size: { width: number; height: number | null };
  title?: string;
  translate: { x: number; y: number };
};

export { DialogHeaderComponentPropsType };
