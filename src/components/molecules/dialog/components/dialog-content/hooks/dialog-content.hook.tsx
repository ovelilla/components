// Vendors
import { useLayoutEffect, useRef, useState } from 'react';
// Handlers
import { DialogContentHandlers } from '../handlers/dialog-content.handlers';
// Types
import { DialogContentHookPropsType } from './types/dialog-content.hook.props.type';
import { DialogContentHookReturnType } from './types/dialog-content.hook.return.type';

const DialogContentHook = ({
  setShouldClose,
}: DialogContentHookPropsType): DialogContentHookReturnType => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [translate, setTranslate] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const contentRef = useRef<HTMLDivElement>(null);

  const {
    handleMouseDownEvent,
    handleMouseUpEvent,
    handleSetInitialPosition,
    handleTouchStartEvent,
    handleTouchEndEvent,
  } = DialogContentHandlers({
    contentRef,
    setPosition,
    setShouldClose,
  });

  useLayoutEffect(() => {
    handleSetInitialPosition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    contentRef,
    handleMouseDownEvent,
    handleMouseUpEvent,
    handleTouchStartEvent,
    handleTouchEndEvent,
    position,
    setTranslate,
    translate,
  };
};

export { DialogContentHook };
