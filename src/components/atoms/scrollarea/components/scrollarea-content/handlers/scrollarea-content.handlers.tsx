// Types
import { ScrollareaContentHandlersPropsType } from './types/scrollarea-content.handlers.props.type';
import { ScrollareaContentHandlersReturnType } from './types/scrollarea-content.handlers.return.type';
import { ScrollEventHandlerPropsType } from './types/scroll-event-handler.props.type';
// Utils
import { getThumbTranslateY } from '../utils/scrollarea-content.utils';

const scrollEventHandler = ({
  contentRef,
  hideDelay,
  setShowScrollbar,
  setThumbTranslateY,
  thumbRef,
  timerRef,
  trackRef,
}: ScrollEventHandlerPropsType): void => {
  const thumbTranslateY = getThumbTranslateY({ contentRef, thumbRef, trackRef });
  setThumbTranslateY(thumbTranslateY);

  setShowScrollbar(true);
  if (timerRef.current) {
    clearTimeout(timerRef.current);
    timerRef.current = null;
  }

  timerRef.current = setTimeout(() => {
    setShowScrollbar(false);
  }, hideDelay);
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
