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
  event.stopPropagation();
  console.log('header - moseDownEventHandler');

  const initialX = event.clientX - (isFullScreen ? 0 : translate.x);
  const initialY = event.clientY - (isFullScreen ? 0 : translate.y);

  const handleMouseMoveEvent = (event: MouseEvent) => {
    event.preventDefault();
    console.log('header - handleMouseMoveEvent');

    const newX = event.clientX - initialX;
    const newY = event.clientY - initialY;
    setTranslate({ x: newX, y: newY });

    if (isFullScreen) {
      const left = Math.min(Math.max(initialX - size.width / 2, 0), window.innerWidth - size.width);

      setPosition({ left, top: 0 });
      setIsFullScreen(false);
    }
  };

  const handleMouseUpEvent = (event: MouseEvent) => {
    event.stopPropagation();
    console.log('header - handleMouseUpEvent');
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
  event.stopPropagation();
  console.log('header - touchStartEventHandler');

  const initialX = event.touches[0].clientX - (isFullScreen ? 0 : translate.x);
  const initialY = event.touches[0].clientY - (isFullScreen ? 0 : translate.y);

  const handleTouchMoveEvent = (event: TouchEvent) => {
    event.preventDefault();
    console.log('header - handleTouchMoveEvent');

    const newX = event.touches[0].clientX - initialX;
    const newY = event.touches[0].clientY - initialY;
    setTranslate({ x: newX, y: newY });

    if (isFullScreen) {
      const left = Math.min(Math.max(initialX - size.width / 2, 0), window.innerWidth - size.width);
      setIsFullScreen(false);
      setPosition({ left, top: 0 });
    }
  };

  const handleTouchEndEvent = (event: TouchEvent) => {
    event.stopPropagation();
    console.log('header - handleTouchEndEvent');
    document.removeEventListener('touchmove', handleTouchMoveEvent);
    document.removeEventListener('touchend', handleTouchEndEvent, true);
  };

  document.addEventListener('touchmove', handleTouchMoveEvent, { passive: false });
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
