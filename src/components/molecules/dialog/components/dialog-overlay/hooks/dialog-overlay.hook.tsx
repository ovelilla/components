// Vendors
import { useEffect, useRef, useState } from 'react';
// Handlers
import { DialogOverlayHandlers } from '../handlers/dialog-overlay.handlers';
// Types
import { DialogOverlayHookPropsType } from './types/dialog-overlay.hook.props.type';
import { DialogOverlayHookReturnType } from './types/dialog-overlay.hook.return.type';

const DialogOverlayHook = ({
  onClose,
  open,
  setShouldClose,
  shouldClose,
}: DialogOverlayHookPropsType): DialogOverlayHookReturnType => {
  const [shouldRender, setShouldRender] = useState(open);

  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      setShouldRender(true);
    }
  }, [open]);

  const { handleAnimationEndEvent, handlePointerDownEvent, handlePointerUpEvent } =
    DialogOverlayHandlers({
      onClose,
      open,
      setShouldClose,
      setShouldRender,
      shouldClose,
    });

  return {
    handleAnimationEndEvent,
    handlePointerDownEvent,
    handlePointerUpEvent,
    overlayRef,
    shouldRender,
  };
};

export { DialogOverlayHook };
