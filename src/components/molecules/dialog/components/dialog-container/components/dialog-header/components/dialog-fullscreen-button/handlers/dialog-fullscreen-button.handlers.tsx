// Types
import { DialogFullscreenButtonHandlersPropsType } from './types/dialog-fullscreen-button.handlers.props.type';
import { DialogFullscreenButtonHandlersReturnType } from './types/dialog-fullscreen-button.handlers.return.type';
import { ClickEventHandlerPropsType } from './types/click-event-handler.props.type';

const clickEventHandler = ({ setIsFullScreen }: ClickEventHandlerPropsType): void => {
  setIsFullScreen((isFullScreen) => !isFullScreen);
};

const stopPropagation = (event: React.MouseEvent<HTMLButtonElement>): void => {
  event.stopPropagation();
};

const DialogFullscreenButtonHandlers = ({
  setIsFullScreen,
}: DialogFullscreenButtonHandlersPropsType): DialogFullscreenButtonHandlersReturnType => {
  return {
    handleClickEvent: () => clickEventHandler({ setIsFullScreen }),
    handleStopPropagation: (event) => stopPropagation(event),
  };
};

export { DialogFullscreenButtonHandlers };
