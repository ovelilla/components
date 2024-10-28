// Types
import { ConfirmDialogHandlersPropsType } from './types/confirm-dialog.handlers.props.type';
import { ConfirmDialogHandlersReturnType } from './types/confirm-dialog.handlers.return.type';

const cancelEventHandler = ({
  onCancel,
}: Pick<ConfirmDialogHandlersPropsType, 'onCancel'>): void => {
  onCancel();
};

const confirmEventHandler = ({
  onConfirm,
}: Pick<ConfirmDialogHandlersPropsType, 'onConfirm'>): void => {
  onConfirm();
};

const ConfirmDialogHandlers = ({
  onCancel,
  onConfirm,
}: ConfirmDialogHandlersPropsType): ConfirmDialogHandlersReturnType => {
  return {
    handleCancelEvent: () => cancelEventHandler({ onCancel }),
    handleConfirmEvent: () => confirmEventHandler({ onConfirm }),
  };
};

export { ConfirmDialogHandlers };
