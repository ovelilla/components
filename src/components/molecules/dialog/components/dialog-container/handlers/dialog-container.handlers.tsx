// Types
import { DialogContainerHandlersPropsType } from './types/dialog-container.handlers.props.type';
import { DialogContainerHandlersReturnType } from './types/dialog-container.handlers.return.type';
import { MouseDownEventHandlerPropsType } from './types/mouse-down-event-handler.props.type';
import { MouseUpEventHandlerPropsType } from './types/mouse-up-event-handler.props.type';
import { SetInitialPositionHandlerPropsType } from './types/set-initial-position-handler.props.type';
import { TouchStartEventHandlerPropsType } from './types/touch-start-event-handler.props.type';
import { TouchEndEventHandlerPropsType } from './types/touch-end-event-handler.props.type';

const mouseDownEventHandler = ({ event, setShouldClose }: MouseDownEventHandlerPropsType): void => {
  event.stopPropagation();
  setShouldClose(false);
};

const mouseUpEventHandler = ({ event }: MouseUpEventHandlerPropsType): void => {
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

const touchStartEventHandler = ({
  event,
  setShouldClose,
}: TouchStartEventHandlerPropsType): void => {
  event.stopPropagation();
  setShouldClose(false);
};

const touchEndEventHandler = ({ event }: TouchEndEventHandlerPropsType): void => {
  event.stopPropagation();
};

const DialogContainerHandlers = ({
  contentRef,
  setPosition,
  setShouldClose,
}: DialogContainerHandlersPropsType): DialogContainerHandlersReturnType => {
  return {
    handleMouseDownEvent: (event) => mouseDownEventHandler({ event, setShouldClose }),
    handleMouseUpEvent: (event) => mouseUpEventHandler({ event }),
    handleSetInitialPosition: () => setInitialPositionHandler({ contentRef, setPosition }),
    handleTouchStartEvent: (event) => touchStartEventHandler({ event, setShouldClose }),
    handleTouchEndEvent: (event) => touchEndEventHandler({ event }),
  };
};

export { DialogContainerHandlers };
