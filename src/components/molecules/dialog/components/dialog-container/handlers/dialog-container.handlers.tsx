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
  containerRef,
  setPosition,
}: SetInitialPositionHandlerPropsType): void => {
  if (containerRef.current) {
    setPosition({
      left: (window.innerWidth - containerRef.current.offsetWidth) / 2,
      top: (window.innerHeight - containerRef.current.offsetHeight) / 2,
    });
  }
};

const DialogContainerHandlers = ({
  containerRef,
  setPosition,
  setShouldClose,
}: DialogContainerHandlersPropsType): DialogContainerHandlersReturnType => {
  return {
    handlePointerDownEvent: (event) => pointerDownEventHandler({ event, setShouldClose }),
    handlePointerUpEvent: (event) => pointerUpEventHandler({ event }),
    handleSetInitialPosition: () => setInitialPositionHandler({ containerRef, setPosition }),
  };
};

export { DialogContainerHandlers };
