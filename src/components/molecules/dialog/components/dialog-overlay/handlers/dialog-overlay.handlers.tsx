// Types
import { DialogOverlayHandlersPropsType } from './types/dialog-overlay.handlers.props.type';
import { DialogOverlayHandlersReturnType } from './types/dialog-overlay.handlers.return.type';
import { MouseDownEventHandlerPropsType } from './types/mouse-down-event-handler.props.type';
import { MouseUpEventHandlerPropsType } from './types/mouse-up-event-handler.props.type';
import { TouchStartEventHandlerPropsType } from './types/touch-start-event-handler.props.type';
import { TouchEndEventHandlerPropsType } from './types/touch-end-event-handler.props.type';

const mouseDownEventHandler = ({ event, setShouldClose }: MouseDownEventHandlerPropsType): void => {
  event.preventDefault();
  setShouldClose(true);
};

const mouseUpEventHandler = ({ onClose, shouldClose }: MouseUpEventHandlerPropsType): void => {
  if (shouldClose) {
    onClose();
  }
};

const touchStartEventHandler = ({ setShouldClose }: TouchStartEventHandlerPropsType): void => {
  setShouldClose(true);
};

const touchEndEventHandler = ({
  event,
  onClose,
  shouldClose,
}: TouchEndEventHandlerPropsType): void => {
  const target = event.target;
  const touch = event.changedTouches[0];
  const touchX = touch.clientX;
  const touchY = touch.clientY;
  const endElement = document.elementFromPoint(touchX, touchY);

  if (shouldClose && target === endElement) {
    onClose();
  }
};

const DialogOverlayHandlers = ({
  onClose,
  setShouldClose,
  shouldClose,
}: DialogOverlayHandlersPropsType): DialogOverlayHandlersReturnType => {
  return {
    handleMouseDownEvent: (event) => mouseDownEventHandler({ event, setShouldClose }),
    handleMouseUpEvent: () => mouseUpEventHandler({ shouldClose, onClose }),
    handleTouchStartEvent: () => touchStartEventHandler({ setShouldClose }),
    handleTouchEndEvent: (event) => touchEndEventHandler({ event, onClose, shouldClose }),
  };
};

export { DialogOverlayHandlers };
