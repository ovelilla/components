// Vendors
import { useLayoutEffect, useRef, useState } from 'react';
// Handlers
import { ScrollareaHandlers } from '../handlers/scrollarea.handlers';
// Types
// import { ScrollareaHookPropsType } from './types/scrollarea.hook.props.type';
import { ScrollareaHookReturnType } from './types/scrollarea.hook.return.type';
// Utils
import { getThumbHeight } from '../utils/scrollarea.utils';

const ScrollareaHook = (): ScrollareaHookReturnType => {
  const [initialPointerY, setInitialPointerY] = useState<number>(0);
  const [initialScrollTop, setInitialScrollTop] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [thumbHeight, setThumbHeight] = useState<number>(0);
  const [thumbTranslateY, setThumbTranslateY] = useState<number>(0);

  const contentRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { handleMouseEnterEvent, handleMouseLeaveEvent } = ScrollareaHandlers({ setIsHovered });

  // useLayoutEffect(() => {
  //   console.log('useLayoutEffect', contentRef, trackRef);
  //   const thumbHeight = getThumbHeight({ contentRef, trackRef });
  //   setThumbHeight(thumbHeight);
  // }, [contentRef, trackRef, isHovered]);

  return {
    contentRef,
    handleMouseEnterEvent,
    handleMouseLeaveEvent,
    initialPointerY,
    initialScrollTop,
    isDragging,
    isHovered,
    setInitialPointerY,
    setInitialScrollTop,
    setIsDragging,
    setThumbHeight,
    setThumbTranslateY,
    thumbHeight,
    thumbRef,
    thumbTranslateY,
    trackRef,
  };
};

export { ScrollareaHook };
