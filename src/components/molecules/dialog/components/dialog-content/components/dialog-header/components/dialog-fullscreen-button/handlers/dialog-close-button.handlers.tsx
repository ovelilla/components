// Types
import { DialogCloseButtonHandlersPropsType } from './types/dialog-close-button.handlers.props.type';
import { DialogCloseButtonHandlersReturnType } from './types/dialog-close-button.handlers.return.type';
import { ClickEventHandlerPropsType } from './types/click-event-handler.props.type';

const clickEventHandler = ({ onClose }: ClickEventHandlerPropsType): void => {
  onClose();
};

const DialogCloseButtonHandlers = ({
  onClose,
}: DialogCloseButtonHandlersPropsType): DialogCloseButtonHandlersReturnType => {
  return {
    handleClickEvent: () => clickEventHandler({ onClose }),
  };
};

export { DialogCloseButtonHandlers };
