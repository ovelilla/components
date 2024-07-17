// Handlers
import { DialogFullscreenButtonHandlers } from '../handlers/dialog-fullscreen-button.handlers';
// Types
import { DialogFullscreenButtonHookPropsType } from './types/dialog-fullscreen-button.hook.props.type';
import { DialogFullscreenButtonHookReturnType } from './types/dialog-fullscreen-button.hook.return.type';

const DialogFullscreenButtonHook = ({
  setIsFullScreen,
}: DialogFullscreenButtonHookPropsType): DialogFullscreenButtonHookReturnType => {
  const { handleClickEvent, handleStopPropagation } = DialogFullscreenButtonHandlers({
    setIsFullScreen,
  });
  return {
    handleClickEvent,
    handleStopPropagation,
  };
};

export { DialogFullscreenButtonHook };
