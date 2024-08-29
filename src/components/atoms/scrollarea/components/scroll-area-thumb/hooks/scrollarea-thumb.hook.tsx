// Handlers
import { ScrollareaThumbHandlers } from '../handlers/scrollarea-thumb.handlers';
// Types
import { ScrollareaThumbHookPropsType } from './types/scrollarea-thumb.hook.props.type';
import { ScrollareaThumbHookReturnType } from './types/scrollarea-thumb.hook.return.type';

const ScrollareaThumbHook = ({
  contentRef,
  setIsDragging,
  trackRef,
}: ScrollareaThumbHookPropsType): ScrollareaThumbHookReturnType => {
  const { handleThumbPointerDownEvent } = ScrollareaThumbHandlers({
    contentRef,
    setIsDragging,
    trackRef,
  });

  return {
    handleThumbPointerDownEvent,
  };
};

export { ScrollareaThumbHook };
