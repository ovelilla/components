// Types
import { ScrollareaHandlersPropsType } from './types/scrollarea.handlers.props.type';
import { ScrollareaHandlersReturnType } from './types/scrollarea.handlers.return.type';
import { MouseEnterEventHandlerPropsType } from './types/mouse-enter-event-handler.props.type';
import { MouseLeaveEventHandlerPropsType } from './types/mouse-leave-event-handler.props.type';

const mouseEnterEventHandler = ({
  setShowScrollbar,
  timerRef,
}: MouseEnterEventHandlerPropsType): void => {
  setShowScrollbar(true);
  if (timerRef.current) {
    clearTimeout(timerRef.current);
    timerRef.current = null;
  }
};

const mouseLeaveEventHandler = ({
  hideDelay,
  isDragging,
  setShowScrollbar,
  timerRef,
}: MouseLeaveEventHandlerPropsType): void => {
  if (isDragging) {
    return;
  }
  timerRef.current = setTimeout(() => {
    setShowScrollbar(false);
  }, hideDelay);
};

const ScrollareaHandlers = ({
  hideDelay,
  isDragging,
  setShowScrollbar,
  timerRef,
}: ScrollareaHandlersPropsType): ScrollareaHandlersReturnType => {
  return {
    handleMouseEnterEvent: () => mouseEnterEventHandler({ setShowScrollbar, timerRef }),
    handleMouseLeaveEvent: () =>
      mouseLeaveEventHandler({ hideDelay, isDragging, setShowScrollbar, timerRef }),
  };
};

export { ScrollareaHandlers };
