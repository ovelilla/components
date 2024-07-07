// Handlers
import { DialogHeaderHandlers } from '../handlers/dialog-header.handlers';
// Types
import { DialogHeaderHookPropsType } from './types/dialog-header.hook.props.type';
import { DialogHeaderHookReturnType } from './types/dialog-header.hook.return.type';

const DialogHeaderHook = ({
  translate,
  setTranslate,
}: DialogHeaderHookPropsType): DialogHeaderHookReturnType => {
  const { handleMouseDownEvent } = DialogHeaderHandlers({
    translate,
    setTranslate,
  });

  return {
    handleMouseDownEvent,
  };
};

export { DialogHeaderHook };
