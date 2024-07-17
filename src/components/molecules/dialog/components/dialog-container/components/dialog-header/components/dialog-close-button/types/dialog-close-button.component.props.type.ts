// Vendors
import { Dispatch, SetStateAction } from 'react';
// Types
import { ButtonComponentPropsType } from 'components/atoms/button/types/button.component.props.type';
import { TooltipComponentPropsType } from 'components/atoms/tooltip/types/tooltip.component.props.type';

type DialogCloseButtonComponentPropsType = {
  buttonProps?: ButtonComponentPropsType;
  onClose: VoidFunction;
  setIsFullScreen: Dispatch<SetStateAction<boolean>>;
  tooltipProps?: TooltipComponentPropsType;
};

export { DialogCloseButtonComponentPropsType };
