// Vendors
import { useLayoutEffect, useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';
// Constants
import {
  // DEFAULT_MIN_HEIGHT,
  // DEFAULT_MIN_WIDTH,
  DEFAULT_WIDTH,
  MEDIA_QUERY,
} from './constants/dialog-container.hook.constants';
// Handlers
import { DialogContainerHandlers } from '../handlers/dialog-container.handlers';
// Types
import { DialogContainerHookPropsType } from './types/dialog-container.hook.props.type';
import { DialogContainerHookReturnType } from './types/dialog-container.hook.return.type';
// Utils
import { getInitailIsFullscreeen } from './utils/dialog-container.hook.utils';

const DialogContainerHook = ({
  initialIsFullscreen,
  initialSize,
  setShouldClose,
}: DialogContainerHookPropsType): DialogContainerHookReturnType => {
  const contentRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery(MEDIA_QUERY);

  const [isFullscreen, setIsFullscreen] = useState<boolean>(
    getInitailIsFullscreeen({ initialIsFullscreen, isMobile })
  );
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

  const { handlePointerDownEvent, handlePointerUpEvent, handleSetInitialPosition } =
    DialogContainerHandlers({
      contentRef,
      setPosition,
      setShouldClose,
    });

  useLayoutEffect(() => {
    handleSetInitialPosition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setIsFullscreen(getInitailIsFullscreeen({ initialIsFullscreen, isMobile }));
  }, [initialIsFullscreen, isMobile]);

  return {
    contentRef,
    handlePointerDownEvent,
    handlePointerUpEvent,
    isFullscreen,
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
