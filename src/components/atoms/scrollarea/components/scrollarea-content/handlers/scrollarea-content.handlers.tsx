// Types
import { ScrollareaContentHandlersPropsType } from './types/scrollarea-content.handlers.props.type';
import { ScrollareaContentHandlersReturnType } from './types/scrollarea-content.handlers.return.type';
import { ScrollEventHandlerPropsType } from './types/scroll-event-handler.props.type';

const scrollEventHandler = ({
  contentRef,
  hideDelay,
  setShowScrollbar,
  setThumbTranslateY,
  thumbRef,
  timerRef,
  trackRef,
}: ScrollEventHandlerPropsType): void => {
  setShowScrollbar(true);

  if (timerRef.current) {
    clearTimeout(timerRef.current);
    timerRef.current = null;
  }

  timerRef.current = setTimeout(() => {
    setShowScrollbar(false);
  }, hideDelay);

  if (!contentRef.current || !thumbRef.current || !trackRef.current) {
    return;
  }

  const contentClientHeight = contentRef.current.clientHeight;
  const contentScrollHeight = contentRef.current.scrollHeight;
  const contentScrollTop = contentRef.current.scrollTop;
  const trackClientHeight = trackRef.current.clientHeight;
  const thumbClientHeight = thumbRef.current.clientHeight;

  const scrollableContentHeight = contentScrollHeight - contentClientHeight;
  const scrollableTrackHeight = trackClientHeight - thumbClientHeight;
  const scrollRatio = contentScrollTop / scrollableContentHeight;
  const thumbTranslateY = scrollRatio * scrollableTrackHeight;

  setThumbTranslateY(thumbTranslateY);
};

const ScrollareaContentHandlers = ({
  contentRef,
  hideDelay,
  setShowScrollbar,
  setThumbTranslateY,
  thumbRef,
  timerRef,
  trackRef,
}: ScrollareaContentHandlersPropsType): ScrollareaContentHandlersReturnType => {
  return {
    handleScrollEvent: () =>
      scrollEventHandler({
        contentRef,
        hideDelay,
        setShowScrollbar,
        setThumbTranslateY,
        thumbRef,
        timerRef,
        trackRef,
      }),
  };
};

export { ScrollareaContentHandlers };
