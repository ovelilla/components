// Types
import { DialogHeaderHandlersPropsType } from './types/dialog-header.handlers.props.type';
import { DialogHeaderHandlersReturnType } from './types/dialog-header.handlers.return.type';
import { MouseDownEventHandlerPropsType } from './types/mouse-down-event-handler.props.type';
import { TouchStartEventHandlerPropsType } from './types/touch-start-event-handler.props.type';

const moseDownEventHandler = ({
  event,
  isFullScreen,
  translate,
  setIsFullScreen,
  setPosition,
  setTranslate,
  size,
}: MouseDownEventHandlerPropsType): void => {
  event.preventDefault();
  event.stopPropagation();

  const initialX = event.clientX - (isFullScreen ? 0 : translate.x);
  const initialY = event.clientY - (isFullScreen ? 0 : translate.y);

  const handleMouseMoveEvent = (event: MouseEvent) => {
    const newX = event.clientX - initialX;
    const newY = event.clientY - initialY;
    setTranslate({ x: newX, y: newY });

    if (isFullScreen) {
      const left = Math.min(Math.max(initialX - size.width / 2, 0), window.innerWidth - size.width);

      setPosition({ left, top: 0 });
      setIsFullScreen(false);
    }
  };

  const handleMouseUpEvent = () => {
    document.removeEventListener('mousemove', handleMouseMoveEvent);
    document.removeEventListener('mouseup', handleMouseUpEvent, true);
  };

  document.addEventListener('mousemove', handleMouseMoveEvent);
  document.addEventListener('mouseup', handleMouseUpEvent, true);
};

const touchStartEventHandler = ({
  event,
  isFullScreen,
  translate,
  setIsFullScreen,
  setPosition,
  setTranslate,
  size,
}: TouchStartEventHandlerPropsType): void => {
  const initialX = event.touches[0].clientX - (isFullScreen ? 0 : translate.x);
  const initialY = event.touches[0].clientY - (isFullScreen ? 0 : translate.y);

  const handleTouchMoveEvent = (event: TouchEvent) => {
    const newX = event.touches[0].clientX - initialX;
    const newY = event.touches[0].clientY - initialY;
    setTranslate({ x: newX, y: newY });

    if (isFullScreen) {
      const left = Math.min(Math.max(initialX - size.width / 2, 0), window.innerWidth - size.width);
      setIsFullScreen(false);
      setPosition({ left, top: 0 });
    }
  };

  const handleTouchEndEvent = () => {
    document.removeEventListener('touchmove', handleTouchMoveEvent);
    document.removeEventListener('touchend', handleTouchEndEvent, true);
  };

  document.addEventListener('touchmove', handleTouchMoveEvent);
  document.addEventListener('touchend', handleTouchEndEvent, true);
};

const DialogHeaderHandlers = ({
  isFullScreen,
  translate,
  setIsFullScreen,
  setPosition,
  setTranslate,
  size,
}: DialogHeaderHandlersPropsType): DialogHeaderHandlersReturnType => {
  return {
    handleMouseDownEvent: (event) =>
      moseDownEventHandler({
        event,
        isFullScreen,
        translate,
        setIsFullScreen,
        setPosition,
        setTranslate,
        size,
      }),
    handleTouchStartEvent: (event) =>
      touchStartEventHandler({
        event,
        isFullScreen,
        translate,
        setIsFullScreen,
        setPosition,
        setTranslate,
        size,
      }),
  };
};

export { DialogHeaderHandlers };
