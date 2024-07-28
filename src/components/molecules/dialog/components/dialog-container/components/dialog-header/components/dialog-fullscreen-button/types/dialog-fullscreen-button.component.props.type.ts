// Vendors
import { Dispatch, SetStateAction } from 'react';
// Types
import { ButtonComponentPropsType } from 'components/atoms/button/types/button.component.props.type';
import { TooltipComponentPropsType } from 'components/atoms/tooltip/types/tooltip.component.props.type';

type DialogFullscreenButtonComponentPropsType = {
  buttonProps?: ButtonComponentPropsType;
  setIsFullscreen: Dispatch<SetStateAction<boolean>>;
  tooltipProps?: TooltipComponentPropsType;
};

export { DialogFullscreenButtonComponentPropsType };
