// Types
import { DialogCloseButtonHandlersPropsType } from './types/dialog-close-button.handlers.props.type';
import { DialogCloseButtonHandlersReturnType } from './types/dialog-close-button.handlers.return.type';
import { ClickEventHandlerPropsType } from './types/click-event-handler.props.type';

const clickEventHandler = ({ onClose, setIsFullScreen }: ClickEventHandlerPropsType): void => {
  setIsFullScreen(false);
  onClose();
};

const stopPropagation = (event: React.MouseEvent<HTMLButtonElement>): void => {
  event.stopPropagation();
};

const DialogCloseButtonHandlers = ({
  onClose,
  setIsFullScreen,
}: DialogCloseButtonHandlersPropsType): DialogCloseButtonHandlersReturnType => {
  return {
    handleClickEvent: () => clickEventHandler({ onClose, setIsFullScreen }),
    handleStopPropagation: (event) => stopPropagation(event),
  };
};

export { DialogCloseButtonHandlers };
