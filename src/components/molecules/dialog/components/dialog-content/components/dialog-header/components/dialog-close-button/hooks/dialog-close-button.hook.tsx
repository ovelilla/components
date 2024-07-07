// Handlers
import { DialogCloseButtonHandlers } from '../handlers/dialog-close-button.handlers';
// Types
import { DialogCloseButtonHookPropsType } from './types/dialog-close-button.hook.props.type';
import { DialogCloseButtonHookReturnType } from './types/dialog-close-button.hook.return.type';

const DialogCloseButtonHook = ({
  onClose,
}: DialogCloseButtonHookPropsType): DialogCloseButtonHookReturnType => {
  const { handleClickEvent } = DialogCloseButtonHandlers({ onClose });
  return {
    handleClickEvent,
  };
};

export { DialogCloseButtonHook };
