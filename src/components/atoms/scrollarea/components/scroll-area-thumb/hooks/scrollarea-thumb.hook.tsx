// Vendors
import { useEffect, useLayoutEffect } from 'react';
// Handlers
import { ScrollareaThumbHandlers } from '../handlers/scrollarea-thumb.handlers';
// Types
import { ScrollareaThumbHookPropsType } from './types/scrollarea-thumb.hook.props.type';
import { ScrollareaThumbHookReturnType } from './types/scrollarea-thumb.hook.return.type';

import { getThumbHeight } from '../utils/scrollarea-thumb.utils';

const ScrollareaThumbHook = ({
  contentRef,
  initialPointerY,
  initialScrollTop,
  isDragging,
  setInitialPointerY,
  setInitialScrollTop,
  setIsDragging,
  setThumbHeight,
  setThumbTranslateY,
  thumbRef,
  trackRef,
}: ScrollareaThumbHookPropsType): ScrollareaThumbHookReturnType => {
  useLayoutEffect(() => {
    console.log('useLayoutEffect', contentRef, trackRef);
    const thumbHeight = getThumbHeight({ contentRef, trackRef });
    setThumbHeight(thumbHeight);
  }, [contentRef, setThumbHeight, trackRef]);

  const {
    handleResizeEvent,
    handleThumbMouseDownEvent,
    handleThumbMouseMoveEvent,
    handleThumbMouseUpEvent,
    handleThumbTouchStartEvent,
    handleThumbTouchMoveEvent,
    handleThumbTouchEndEvent,
  } = ScrollareaThumbHandlers({
    contentRef,
    initialPointerY,
    initialScrollTop,
    isDragging,
    setInitialPointerY,
    setInitialScrollTop,
    setIsDragging,
    setThumbHeight,
    setThumbTranslateY,
    thumbRef,
    trackRef,
  });

  useEffect(() => {
    document.addEventListener('mousemove', handleThumbMouseMoveEvent);
    document.addEventListener('mouseup', handleThumbMouseUpEvent);
    document.addEventListener('touchmove', handleThumbTouchMoveEvent);
    document.addEventListener('touchend', handleThumbTouchEndEvent);
    window.addEventListener('resize', handleResizeEvent);
    return () => {
      document.removeEventListener('mousemove', handleThumbMouseMoveEvent);
      document.removeEventListener('mouseup', handleThumbMouseUpEvent);
      document.removeEventListener('touchmove', handleThumbTouchMoveEvent);
      document.removeEventListener('touchend', handleThumbTouchEndEvent);
      window.removeEventListener('resize', handleResizeEvent);
    };
  }, [
    handleThumbMouseMoveEvent,
    handleThumbMouseUpEvent,
    handleThumbTouchMoveEvent,
    handleThumbTouchEndEvent,
    handleResizeEvent,
  ]);

  return {
    handleThumbMouseDownEvent,
    handleThumbTouchStartEvent,
  };
};

export { ScrollareaThumbHook };
