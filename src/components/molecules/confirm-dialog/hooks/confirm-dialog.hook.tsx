// Handlers
import { ConfirmDialogHandlers } from '../handlers/confirm-dialog.handlers';
// Types
import { ConfirmDialogHookPropsType } from './types/confirm-dialog.hook.props.type';
import { ConfirmDialogHookReturnType } from './types/confirm-dialog.hook.return.type';

const ConfirmDialogHook = ({
  onCancel,
  onConfirm,
}: ConfirmDialogHookPropsType): ConfirmDialogHookReturnType => {
  const { handleCancelEvent, handleConfirmEvent } = ConfirmDialogHandlers({
    onCancel,
    onConfirm,
  });

  return {
    handleCancelEvent,
    handleConfirmEvent,
  };
};

export { ConfirmDialogHook };
