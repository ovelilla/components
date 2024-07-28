// Types
import { DialogCloseButtonHandlersPropsType } from './types/dialog-close-button.handlers.props.type';
import { DialogCloseButtonHandlersReturnType } from './types/dialog-close-button.handlers.return.type';
import { ClickEventHandlerPropsType } from './types/click-event-handler.props.type';

const clickEventHandler = ({ onClose, setIsFullscreen }: ClickEventHandlerPropsType): void => {
  setIsFullscreen(false);
  onClose();
};

const pointerDownEventHandler = (event: React.PointerEvent<HTMLDivElement>): void => {
  event.stopPropagation();
};

const pointerUpEventHandler = (event: React.PointerEvent<HTMLDivElement>): void => {
  event.stopPropagation();
};

const DialogCloseButtonHandlers = ({
  onClose,
  setIsFullscreen,
}: DialogCloseButtonHandlersPropsType): DialogCloseButtonHandlersReturnType => {
  return {
    handleClickEvent: () => clickEventHandler({ onClose, setIsFullscreen }),
    handlePointerDownEvent: (event) => pointerDownEventHandler(event),
    handlePointerUpEvent: (event) => pointerUpEventHandler(event),
  };
};

export { DialogCloseButtonHandlers };
