// Types
import { ButtonComponentPropsType } from 'components/atoms/button/types/button.component.props.type';
import { TooltipComponentPropsType } from 'components/atoms/tooltip/types/tooltip.component.props.type';

type DialogCloseButtonComponentPropsType = {
  buttonProps?: ButtonComponentPropsType;
  onClose: VoidFunction;
  tooltipProps?: TooltipComponentPropsType;
};

export { DialogCloseButtonComponentPropsType };
