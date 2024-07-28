// Types
import { DialogFullscreenButtonHandlersPropsType } from './types/dialog-fullscreen-button.handlers.props.type';
import { DialogFullscreenButtonHandlersReturnType } from './types/dialog-fullscreen-button.handlers.return.type';
import { ClickEventHandlerPropsType } from './types/click-event-handler.props.type';

const clickEventHandler = ({ setIsFullscreen }: ClickEventHandlerPropsType): void => {
  setIsFullscreen((isFullscreen) => !isFullscreen);
};

const pointerDownEventHandler = (event: React.PointerEvent<HTMLDivElement>): void => {
  event.stopPropagation();
};

const pointerUpEventHandler = (event: React.PointerEvent<HTMLDivElement>): void => {
  event.stopPropagation();
};

const DialogFullscreenButtonHandlers = ({
  setIsFullscreen,
}: DialogFullscreenButtonHandlersPropsType): DialogFullscreenButtonHandlersReturnType => {
  return {
    handleClickEvent: () => clickEventHandler({ setIsFullscreen }),
    handlePointerDownEvent: (event) => pointerDownEventHandler(event),
    handlePointerUpEvent: (event) => pointerUpEventHandler(event),
  };
};

export { DialogFullscreenButtonHandlers };
