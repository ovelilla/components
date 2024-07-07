// Types
import { DialogContentHandlersPropsType } from './types/dialog-content.handlers.props.type';
import { DialogContentHandlersReturnType } from './types/dialog-content.handlers.return.type';
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
      x: (window.innerWidth - contentRef.current.offsetWidth) / 2,
      y: (window.innerHeight - contentRef.current.offsetHeight) / 2,
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

const DialogContentHandlers = ({
  contentRef,
  setPosition,
  setShouldClose,
}: DialogContentHandlersPropsType): DialogContentHandlersReturnType => {
  return {
    handleMouseDownEvent: (event) => mouseDownEventHandler({ event, setShouldClose }),
    handleMouseUpEvent: (event) => mouseUpEventHandler({ event }),
    handleSetInitialPosition: () => setInitialPositionHandler({ contentRef, setPosition }),
    handleTouchStartEvent: (event) => touchStartEventHandler({ event, setShouldClose }),
    handleTouchEndEvent: (event) => touchEndEventHandler({ event }),
  };
};

export { DialogContentHandlers };
