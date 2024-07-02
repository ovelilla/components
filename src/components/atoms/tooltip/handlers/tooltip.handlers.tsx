// Types
import { TooltipHandlersPropsType } from './types/tooltip.handlers.props.type';
import { TooltipHandlersReturnType } from './types/tooltip.handlers.return.type';
import { MouseEnterEventHandlerPropsType } from './types/mouse-enter-event-handler.props.type';
import { MouseLeaveEventHandlerPropsType } from './types/mouse-leave-event-handler.props.type';

const mouseEnterEventHandler = ({
  hideTimeRef,
  setVisible,
  showDelay,
  showTimeRef,
}: MouseEnterEventHandlerPropsType): void => {
  if (hideTimeRef.current) {
    clearTimeout(hideTimeRef.current);
    hideTimeRef.current = null;
  }

  if (showDelay > 0) {
    showTimeRef.current = setTimeout(() => {
      setVisible(true);
    }, showDelay);
  } else {
    setVisible(true);
  }
};

const mouseLeaveEventHandler = ({
  hideDelay,
  hideTimeRef,
  setVisible,
  showTimeRef,
}: MouseLeaveEventHandlerPropsType): void => {
  if (showTimeRef.current) {
    clearTimeout(showTimeRef.current);
    showTimeRef.current = null;
  }
  if (hideDelay > 0) {
    hideTimeRef.current = setTimeout(() => {
      setVisible(false);
    }, hideDelay);
  } else {
    setVisible(false);
  }
};

const TooltipHandlers = ({
  hideDelay,
  hideTimeRef,
  setVisible,
  showDelay,
  showTimeRef,
}: TooltipHandlersPropsType): TooltipHandlersReturnType => {
  return {
    handleMouseEnterEvent: () =>
      mouseEnterEventHandler({ hideTimeRef, setVisible, showDelay, showTimeRef }),
    handleMouseLeaveEvent: () =>
      mouseLeaveEventHandler({ hideDelay, hideTimeRef, setVisible, showTimeRef }),
  };
};

export { TooltipHandlers };
