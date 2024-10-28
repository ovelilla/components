// Vendors
import { useLayoutEffect, useRef, useState } from 'react';
// Handlers
import { ScrollareaHandlers } from '../handlers/scrollarea.handlers';
// Types
import { ScrollareaHookPropsType } from './types/scrollarea.hook.props.type';
import { ScrollareaHookReturnType } from './types/scrollarea.hook.return.type';
// Utils
import { getHasScrollbar, getThumbHeight, getThumbTranslateY } from '../utils/scrollarea.utils';

const ScrollareaHook = ({ hideDelay }: ScrollareaHookPropsType): ScrollareaHookReturnType => {
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollareaRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [hasScrollbar, setHasScrollbar] = useState<boolean>(true);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [showScrollbar, setShowScrollbar] = useState<boolean>(false);
  const [thumbTranslateY, setThumbTranslateY] = useState<number>(0);
  const [thumbHeight, setThumbHeight] = useState<number>(0);

  const { handleMouseEnterEvent, handleMouseLeaveEvent } = ScrollareaHandlers({
    hideDelay,
    isDragging,
    setShowScrollbar,
    timerRef,
  });

  useLayoutEffect(() => {
    setThumbHeight(getThumbHeight({ contentRef, trackRef }));
  }, [showScrollbar]);

  useLayoutEffect(() => {
    if (!scrollareaRef.current) {
      return;
    }

    const observer = new ResizeObserver(() => {
      setHasScrollbar(getHasScrollbar({ contentRef }));
      setThumbHeight(getThumbHeight({ contentRef, trackRef }));
      setThumbTranslateY(getThumbTranslateY({ contentRef, thumbRef, trackRef }));
    });

    observer.observe(scrollareaRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return {
    contentRef,
    handleMouseEnterEvent,
    handleMouseLeaveEvent,
    hasScrollbar,
    scrollareaRef,
    setIsDragging,
    setShowScrollbar,
    setThumbTranslateY,
    showScrollbar,
    thumbHeight,
    thumbRef,
    thumbTranslateY,
    timerRef,
    trackRef,
  };
};

export { ScrollareaHook };
