// Vendors
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';
// Constants
import { MEDIA_QUERY } from './constants/dialog-container.hook.constants';
// Handlers
import { DialogContainerHandlers } from '../handlers/dialog-container.handlers';
// Types
import { DialogContainerHookPropsType } from './types/dialog-container.hook.props.type';
import { DialogContainerHookReturnType } from './types/dialog-container.hook.return.type';
// Utils
import {
  getInitailIsFullscreen,
  getInitialMinSize,
  getInitialPosition,
  getInitialSize,
} from './utils/dialog-container.hook.utils';

const DialogContainerHook = ({
  initialIsFullscreen,
  initialMinSize,
  initialPosition,
  initialSize,
  open,
  setShouldClose,
}: DialogContainerHookPropsType): DialogContainerHookReturnType => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery(MEDIA_QUERY);

  const [isFullscreen, setIsFullscreen] = useState<boolean>(
    getInitailIsFullscreen({ initialIsFullscreen, isMobile })
  );
  const [minSize, setMinSize] = useState<{ width: number; height: number }>(
    getInitialMinSize({ initialMinSize })
  );
  const [position, setPosition] = useState<{ left: number; top: number }>(
    getInitialPosition({ containerRef, initialPosition })
  );
  const [shouldRender, setShouldRender] = useState(open);
  const [size, setSize] = useState<{ width: number; height: number | null }>(
    getInitialSize({ containerRef, initialSize })
  );
  const [translate, setTranslate] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const { handleAnimationEndEvent, handlePointerDownEvent, handlePointerUpEvent } =
    DialogContainerHandlers({
      containerRef,
      open,
      setPosition,
      setShouldClose,
      setShouldRender,
    });

  useLayoutEffect(() => {
    setSize(getInitialSize({ containerRef, initialSize }));
  }, [initialSize]);

  useLayoutEffect(() => {
    setMinSize(getInitialMinSize({ initialMinSize }));
  }, [initialMinSize]);

  useEffect(() => {
    setPosition(getInitialPosition({ containerRef, initialPosition }));
  }, [initialPosition]);

  useEffect(() => {
    setIsFullscreen(getInitailIsFullscreen({ initialIsFullscreen, isMobile }));
  }, [initialIsFullscreen, isMobile]);

  useEffect(() => {
    if (open) {
      setShouldRender(true);
    }
  }, [open]);

  return {
    containerRef,
    handleAnimationEndEvent,
    handlePointerDownEvent,
    handlePointerUpEvent,
    isFullscreen,
    minSize,
    position,
    setIsFullscreen,
    setPosition,
    setSize,
    setTranslate,
    size,
    translate,
  };
};

export { DialogContainerHook };
