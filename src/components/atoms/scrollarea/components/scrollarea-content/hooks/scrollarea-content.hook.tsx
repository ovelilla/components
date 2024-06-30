// Handlers
import { ScrollareaContentHandlers } from '../handlers/scrollarea-content.handlers';
// Types
import { ScrollareaContentHookPropsType } from './types/scrollarea-content.hook.props.type';
import { ScrollareaContentHookReturnType } from './types/scrollarea-content.hook.return.type';

const ScrollareaContentHook = ({
  contentRef,
  hideDelay,
  setShowScrollbar,
  setThumbTranslateY,
  thumbRef,
  timerRef,
  trackRef,
}: ScrollareaContentHookPropsType): ScrollareaContentHookReturnType => {
  const { handleScrollEvent } = ScrollareaContentHandlers({
    contentRef,
    hideDelay,
    setShowScrollbar,
    setThumbTranslateY,
    thumbRef,
    timerRef,
    trackRef,
  });

  return {
    handleScrollEvent,
  };
};

export { ScrollareaContentHook };
