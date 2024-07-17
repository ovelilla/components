// Vendors
import { useLayoutEffect, useRef, useState } from 'react';
// Constants
import {
  // DEFAULT_MIN_HEIGHT,
  // DEFAULT_MIN_WIDTH,
  DEFAULT_WIDTH,
} from './constants/dialog-container.hook.constants';
// Handlers
import { DialogContainerHandlers } from '../handlers/dialog-container.handlers';
// Types
import { DialogContainerHookPropsType } from './types/dialog-container.hook.props.type';
import { DialogContainerHookReturnType } from './types/dialog-container.hook.return.type';

const DialogContainerHook = ({
  initialSize,
  setShouldClose,
}: DialogContainerHookPropsType): DialogContainerHookReturnType => {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [position, setPosition] = useState<{ left: number; top: number }>({ left: 0, top: 0 });
  const [size, setSize] = useState<{ width: number; height: number | null }>({
    width: initialSize?.width ?? DEFAULT_WIDTH,
    height: initialSize?.height ?? null,
  });
  // const [minSize, setMinSize] = useState<{ width: number; height: number }>({
  //   width: DEFAULT_MIN_WIDTH,
  //   height: DEFAULT_MIN_HEIGHT,
  // });
  const [translate, setTranslate] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const contentRef = useRef<HTMLDivElement>(null);

  const {
    handleMouseDownEvent,
    handleMouseUpEvent,
    handleSetInitialPosition,
    handleTouchStartEvent,
    handleTouchEndEvent,
  } = DialogContainerHandlers({
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
    handleTouchEndEvent,
    handleTouchStartEvent,
    isFullScreen,
    position,
    setIsFullScreen,
    setPosition,
    setSize,
    setTranslate,
    size,
    translate,
  };
};

export { DialogContainerHook };
