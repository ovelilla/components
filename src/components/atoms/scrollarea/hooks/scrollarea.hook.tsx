// Vendors
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
// Handlers
import { ScrollareaHandlers } from '../handlers/scrollarea.handlers';
// Types
import { ScrollareaHookPropsType } from './types/scrollarea.hook.props.type';
import { ScrollareaHookReturnType } from './types/scrollarea.hook.return.type';
// Utils
import { getThumbHeight, getThumbTranslateY } from '../utils/scrollarea.utils';

const ScrollareaHook = ({ hideDelay }: ScrollareaHookPropsType): ScrollareaHookReturnType => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [showScrollbar, setShowScrollbar] = useState<boolean>(false);
  const [thumbHeight, setThumbHeight] = useState<number>(0);
  const [thumbTranslateY, setThumbTranslateY] = useState<number>(0);

  const contentRef = useRef<HTMLDivElement>(null);
  const scrollareaRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    if (!scrollareaRef.current) {
      return;
    }

    const observer = new ResizeObserver(() => {
      const thumbHeight = getThumbHeight({ contentRef, trackRef });
      setThumbHeight(thumbHeight);

      const thumbTranslateY = getThumbTranslateY({ contentRef, thumbRef, trackRef });
      setThumbTranslateY(thumbTranslateY);
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
