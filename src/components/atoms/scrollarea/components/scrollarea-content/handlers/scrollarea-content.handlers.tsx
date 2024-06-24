// Types
import { ScrollareaContentHandlersPropsType } from './types/scrollarea-content.handlers.props.type';
import { ScrollareaContentHandlersReturnType } from './types/scrollarea-content.handlers.return.type';
import { ScrollEventHandlerPropsType } from './types/scroll-event-handler.props.type';
// Utils
import { getThumbTranslateY } from '../utils/scrollarea-content.utils';

const scrollEventHandler = ({
  contentRef,
  setThumbTranslateY,
  thumbRef,
  trackRef,
}: ScrollEventHandlerPropsType): void => {
  const thumbTranslateY = getThumbTranslateY({ contentRef, thumbRef, trackRef });
  setThumbTranslateY(thumbTranslateY);
};

const ScrollareaContentHandlers = ({
  contentRef,
  setThumbTranslateY,
  thumbRef,
  trackRef,
}: ScrollareaContentHandlersPropsType): ScrollareaContentHandlersReturnType => {
  return {
    handleScrollEvent: () =>
      scrollEventHandler({ contentRef, setThumbTranslateY, thumbRef, trackRef }),
  };
};

export { ScrollareaContentHandlers };
