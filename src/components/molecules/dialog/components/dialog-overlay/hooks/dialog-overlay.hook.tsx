// Handlers
import { DialogOverlayHandlers } from '../handlers/dialog-overlay.handlers';
// Types
import { DialogOverlayHookPropsType } from './types/dialog-overlay.hook.props.type';
import { DialogOverlayHookReturnType } from './types/dialog-overlay.hook.return.type';

const DialogOverlayHook = ({
  onClose,
  setShouldClose,
  shouldClose,
}: DialogOverlayHookPropsType): DialogOverlayHookReturnType => {
  const { handlePointerDownEvent, handlePointerUpEvent } = DialogOverlayHandlers({
    onClose,
    setShouldClose,
    shouldClose,
  });

  return { handlePointerDownEvent, handlePointerUpEvent };
};

export { DialogOverlayHook };
