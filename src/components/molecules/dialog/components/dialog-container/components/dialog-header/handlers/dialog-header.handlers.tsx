// Types
import { DialogHeaderHandlersPropsType } from './types/dialog-header.handlers.props.type';
import { DialogHeaderHandlersReturnType } from './types/dialog-header.handlers.return.type';
import { PointerDownEventHandlerPropsType } from './types/pointer-down-event-handler.props.type';
// Utils
import { getPosition } from './utils/dialog-header.handlers.utils';

const pointerDownEventHandler = ({
  event,
  isFullscreen,
  translate,
  setIsFullscreen,
  setPosition,
  setTranslate,
  size,
}: PointerDownEventHandlerPropsType): void => {
  event.stopPropagation();

  const initialX = event.clientX - (isFullscreen ? 0 : translate.x);
  const initialY = event.clientY - (isFullscreen ? 0 : translate.y);

  const handlePointerMoveEvent = (event: MouseEvent) => {
    event.preventDefault();

    const newX = event.clientX - initialX;
    const newY = event.clientY - initialY;
    setTranslate({ x: newX, y: newY });

    if (isFullscreen) {
      const { left, top } = getPosition({ initialX, size });
      setPosition({ left, top });
      setIsFullscreen(false);
    }
  };

  const handlePointerUpEvent = (event: MouseEvent) => {
    event.stopPropagation();

    document.removeEventListener('pointermove', handlePointerMoveEvent);
    document.removeEventListener('pointerup', handlePointerUpEvent, true);
  };

  document.addEventListener('pointermove', handlePointerMoveEvent);
  document.addEventListener('pointerup', handlePointerUpEvent, true);
};

const DialogHeaderHandlers = ({
  isFullscreen,
  translate,
  setIsFullscreen,
  setPosition,
  setTranslate,
  size,
}: DialogHeaderHandlersPropsType): DialogHeaderHandlersReturnType => {
  return {
    handlePointerDownEvent: (event) =>
      pointerDownEventHandler({
        event,
        isFullscreen,
        translate,
        setIsFullscreen,
        setPosition,
        setTranslate,
        size,
      }),
  };
};

export { DialogHeaderHandlers };
