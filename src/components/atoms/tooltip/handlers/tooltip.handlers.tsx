// Types
import { MouseEnterEventHandlerPropsType } from './types/mouse-enter-event-handler.props.type';
import { MouseLeaveEventHandlerPropsType } from './types/mouse-leave-event-handler.props.type';
import { TooltipHandlersPropsType } from './types/tooltip.handlers.props.type';
import { TooltipHandlersReturnType } from './types/tooltip.handlers.return.type';
import { TouchEndEventHandlerPropsType } from './types/touch-end-event-handler.props.type';
import { TouchStartEventHandlerPropsType } from './types/touch-start-event-handler.props.type';

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

const touchStartEventHandler = ({
  hideTimeRef,
  setVisible,
  showDelay,
  showTimeRef,
}: TouchStartEventHandlerPropsType): void => {
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

const touchEndEventHandler = ({
  hideDelay,
  hideTimeRef,
  setVisible,
  showTimeRef,
}: TouchEndEventHandlerPropsType): void => {
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
    handleTouchStartEvent: () =>
      touchStartEventHandler({ hideTimeRef, setVisible, showDelay, showTimeRef }),
    handleTouchEndEvent: () =>
      touchEndEventHandler({ hideDelay, hideTimeRef, setVisible, showTimeRef }),
  };
};

export { TooltipHandlers };
