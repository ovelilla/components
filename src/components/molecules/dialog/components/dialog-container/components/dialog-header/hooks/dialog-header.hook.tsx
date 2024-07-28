// Handlers
import { DialogHeaderHandlers } from '../handlers/dialog-header.handlers';
// Types
import { DialogHeaderHookPropsType } from './types/dialog-header.hook.props.type';
import { DialogHeaderHookReturnType } from './types/dialog-header.hook.return.type';

const DialogHeaderHook = ({
  isFullscreen,
  translate,
  setIsFullscreen,
  setPosition,
  setTranslate,
  size,
}: DialogHeaderHookPropsType): DialogHeaderHookReturnType => {
  const { handlePointerDownEvent } = DialogHeaderHandlers({
    isFullscreen,
    setIsFullscreen,
    setPosition,
    setTranslate,
    size,
    translate,
  });

  return { handlePointerDownEvent };
};

export { DialogHeaderHook };
