// Types
import { DialogContainerHandlersPropsType } from './types/dialog-container.handlers.props.type';
import { DialogContainerHandlersReturnType } from './types/dialog-container.handlers.return.type';
import { PointerDownEventHandlerPropsType } from './types/pointer-down-event-handler.props.type';
import { PointerUpEventHandlerPropsType } from './types/pointer-up-event-handler.props.type';
import { SetInitialPositionHandlerPropsType } from './types/set-initial-position-handler.props.type';

const pointerDownEventHandler = ({
  event,
  setShouldClose,
}: PointerDownEventHandlerPropsType): void => {
  event.stopPropagation();
  setShouldClose(false);
};

const pointerUpEventHandler = ({ event }: PointerUpEventHandlerPropsType): void => {
  event.stopPropagation();
};

const setInitialPositionHandler = ({
  contentRef,
  setPosition,
}: SetInitialPositionHandlerPropsType): void => {
  if (contentRef.current) {
    setPosition({
      left: (window.innerWidth - contentRef.current.offsetWidth) / 2,
      top: (window.innerHeight - contentRef.current.offsetHeight) / 2,
    });
  }
};

const DialogContainerHandlers = ({
  contentRef,
  setPosition,
  setShouldClose,
}: DialogContainerHandlersPropsType): DialogContainerHandlersReturnType => {
  return {
    handlePointerDownEvent: (event) => pointerDownEventHandler({ event, setShouldClose }),
    handlePointerUpEvent: (event) => pointerUpEventHandler({ event }),
    handleSetInitialPosition: () => setInitialPositionHandler({ contentRef, setPosition }),
  };
};

export { DialogContainerHandlers };
