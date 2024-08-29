// Vendors
import { useLayoutEffect, useRef, useState } from 'react';
// Handlers
import { ScrollareaHandlers } from '../handlers/scrollarea.handlers';
// Types
import { ScrollareaHookPropsType } from './types/scrollarea.hook.props.type';
import { ScrollareaHookReturnType } from './types/scrollarea.hook.return.type';
// Utils
import { getThumbHeight } from '../utils/scrollarea.utils';

const ScrollareaHook = ({ hideDelay }: ScrollareaHookPropsType): ScrollareaHookReturnType => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [showScrollbar, setShowScrollbar] = useState<boolean>(false);
  const [thumbHeight, setThumbHeight] = useState<number>(0);
  const [thumbTranslateY, setThumbTranslateY] = useState<number>(0);

  const contentRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { handleMouseEnterEvent, handleMouseLeaveEvent } = ScrollareaHandlers({
    hideDelay,
    isDragging,
    setShowScrollbar,
    timerRef,
  });

  useLayoutEffect(() => {
    const thumbHeight = getThumbHeight({ contentRef, trackRef });
    setThumbHeight(thumbHeight);
  }, [showScrollbar]);

  return {
    contentRef,
    handleMouseEnterEvent,
    handleMouseLeaveEvent,
    setIsDragging,
    setThumbTranslateY,
    showScrollbar,
    thumbHeight,
    thumbRef,
    thumbTranslateY,
    trackRef,
  };
};

export { ScrollareaHook };
