// Handlers
import { DialogHeaderHandlers } from '../handlers/dialog-header.handlers';
// Types
import { DialogHeaderHookPropsType } from './types/dialog-header.hook.props.type';
import { DialogHeaderHookReturnType } from './types/dialog-header.hook.return.type';

const DialogHeaderHook = ({
  isFullScreen,
  translate,
  setIsFullScreen,
  setPosition,
  setTranslate,
  size,
}: DialogHeaderHookPropsType): DialogHeaderHookReturnType => {
  const { handleMouseDownEvent, handleTouchStartEvent } = DialogHeaderHandlers({
    isFullScreen,
    translate,
    setIsFullScreen,
    setPosition,
    setTranslate,
    size,
  });

  return {
    handleMouseDownEvent,
    handleTouchStartEvent,
  };
};

export { DialogHeaderHook };
