// Types
import { DialogOverlayHandlersPropsType } from './types/dialog-overlay.handlers.props.type';
import { DialogOverlayHandlersReturnType } from './types/dialog-overlay.handlers.return.type';
import { PointerDownEventHandlerPropsType } from './types/pointer-down-event-handler.props.type';
import { PointerUpEventHandlerPropsType } from './types/pointer-up-event-handler.props.type';

const pointerDownEventHandler = ({
  event,
  setShouldClose,
}: PointerDownEventHandlerPropsType): void => {
  event.preventDefault();
  setShouldClose(true);
};

const pointerUpEventHandler = ({ onClose, shouldClose }: PointerUpEventHandlerPropsType): void => {
  if (shouldClose) {
    onClose();
  }
};

const DialogOverlayHandlers = ({
  onClose,
  setShouldClose,
  shouldClose,
}: DialogOverlayHandlersPropsType): DialogOverlayHandlersReturnType => {
  return {
    handlePointerDownEvent: (event) => pointerDownEventHandler({ event, setShouldClose }),
    handlePointerUpEvent: () => pointerUpEventHandler({ shouldClose, onClose }),
  };
};

export { DialogOverlayHandlers };
