// Vendors
// Handlers
import { DialogResizeHandlers } from '../handlers/dialog-resize.handlers';
// Types
import { DialogResizeHookPropsType } from './types/dialog-resize.hook.props.type';
import { DialogResizeHookReturnType } from './types/dialog-resize.hook.return.type';

const DialogResizeHook = ({
  disabled,
  minSize,
  setSize,
  setTranslate,
  size,
  translate,
}: DialogResizeHookPropsType): DialogResizeHookReturnType => {
  const {
    handleBottomLeftCornerPointerDownEvent,
    handleBottomRightCornerPointerDownEvent,
    handleBottomSidePointerDownEvent,
    handleLeftSidePointerDownEvent,
    handleRightSidePointerDownEvent,
    handleTopLeftCornerPointerDownEvent,
    handleTopRightCornerPointerDownEvent,
    handleTopSidePointerDownEvent,
  } = DialogResizeHandlers({
    disabled,
    minSize,
    setSize,
    setTranslate,
    size,
    translate,
  });

  return {
    handleBottomLeftCornerPointerDownEvent,
    handleBottomRightCornerPointerDownEvent,
    handleBottomSidePointerDownEvent,
    handleLeftSidePointerDownEvent,
    handleRightSidePointerDownEvent,
    handleTopLeftCornerPointerDownEvent,
    handleTopRightCornerPointerDownEvent,
    handleTopSidePointerDownEvent,
  };
};

export { DialogResizeHook };
