// Handlers
import { DialogFullscreenButtonHandlers } from '../handlers/dialog-fullscreen-button.handlers';
// Types
import { DialogFullscreenButtonHookPropsType } from './types/dialog-fullscreen-button.hook.props.type';
import { DialogFullscreenButtonHookReturnType } from './types/dialog-fullscreen-button.hook.return.type';

const DialogFullscreenButtonHook = ({
  setIsFullscreen,
}: DialogFullscreenButtonHookPropsType): DialogFullscreenButtonHookReturnType => {
  const { handleClickEvent, handlePointerDownEvent, handlePointerUpEvent } =
    DialogFullscreenButtonHandlers({
      setIsFullscreen,
    });

  return {
    handleClickEvent,
    handlePointerDownEvent,
    handlePointerUpEvent,
  };
};

export { DialogFullscreenButtonHook };
