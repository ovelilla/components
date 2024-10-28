// Types
import { AnimationEndEventHandlerPropsType } from './types/animation-end-event-handler.props.type';
import { DialogOverlayHandlersPropsType } from './types/dialog-overlay.handlers.props.type';
import { DialogOverlayHandlersReturnType } from './types/dialog-overlay.handlers.return.type';
import { PointerDownEventHandlerPropsType } from './types/pointer-down-event-handler.props.type';
import { PointerUpEventHandlerPropsType } from './types/pointer-up-event-handler.props.type';

const animationEndEventHandler = ({
  open,
  setShouldRender,
}: AnimationEndEventHandlerPropsType): void => {
  if (!open) {
    setShouldRender(false);
  }
};

const pointerDownEventHandler = ({
  event,
  setShouldClose,
}: PointerDownEventHandlerPropsType): void => {
  if (event.button === 2) {
    return;
  }
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
  open,
  setShouldClose,
  setShouldRender,
  shouldClose,
}: DialogOverlayHandlersPropsType): DialogOverlayHandlersReturnType => {
  return {
    handleAnimationEndEvent: () => animationEndEventHandler({ open, setShouldRender }),
    handlePointerDownEvent: (event) => pointerDownEventHandler({ event, setShouldClose }),
    handlePointerUpEvent: () => pointerUpEventHandler({ shouldClose, onClose }),
  };
};

export { DialogOverlayHandlers };
