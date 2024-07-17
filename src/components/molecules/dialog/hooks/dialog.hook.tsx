// Vendors
import { useLayoutEffect, useRef, useState } from 'react';
// Handlers
import { DialogHandlers } from '../handlers/dialog.handlers';
// Types
import { DialogHookPropsType } from './types/dialog.hook.props.type';
import { DialogHookReturnType } from './types/dialog.hook.return.type';

const DialogHook = ({ open }: DialogHookPropsType): DialogHookReturnType => {
  const [hasHorizontalScroll, setHasHorizontalScroll] = useState<boolean>(false);
  const [hasVerticalScroll, setHasVerticalScroll] = useState<boolean>(false);
  const [shouldClose, setShouldClose] = useState<boolean>(false);

  const overlayRef = useRef<HTMLDivElement>(null);

  const { handleCheckScroll } = DialogHandlers({
    open,
    setHasHorizontalScroll,
    setHasVerticalScroll,
  });

  useLayoutEffect(() => {
    handleCheckScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return {
    hasHorizontalScroll,
    hasVerticalScroll,
    overlayRef,
    setShouldClose,
    shouldClose,
  };
};

export { DialogHook };
