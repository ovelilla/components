// Types
import { DialogHeaderHandlersPropsType } from './types/dialog-header.handlers.props.type';
import { DialogHeaderHandlersReturnType } from './types/dialog-header.handlers.return.type';
import { MouseDownEventHandlerPropsType } from './types/mouse-down-event-handler.props.type';

const moseDownEventHandler = ({
  event,
  translate,
  setTranslate,
}: MouseDownEventHandlerPropsType): void => {
  event.preventDefault();
  event.stopPropagation();

  const initialX = event.clientX - translate.x;
  const initialY = event.clientY - translate.y;

  const handleMouseMoveEvent = (event: MouseEvent) => {
    const newX = event.clientX - initialX;
    const newY = event.clientY - initialY;
    setTranslate({ x: newX, y: newY });
  };

  const handleMouseUpEvent = () => {
    document.removeEventListener('mousemove', handleMouseMoveEvent);
    document.removeEventListener('mouseup', handleMouseUpEvent, true);
  };

  document.addEventListener('mousemove', handleMouseMoveEvent);
  document.addEventListener('mouseup', handleMouseUpEvent, true);
};

const DialogHeaderHandlers = ({
  translate,
  setTranslate,
}: DialogHeaderHandlersPropsType): DialogHeaderHandlersReturnType => {
  return {
    handleMouseDownEvent: (event) => moseDownEventHandler({ event, translate, setTranslate }),
  };
};

export { DialogHeaderHandlers };
