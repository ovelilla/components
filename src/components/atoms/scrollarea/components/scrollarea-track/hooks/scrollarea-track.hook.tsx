// Handlers
import { ScrollareaTrackHandlers } from '../handlers/scrollarea-track.handlers';
// Types
import { ScrollareaTrackHookPropsType } from './types/scrollarea-track.hook.props.type';
import { ScrollareaTrackHookReturnType } from './types/scrollarea-track.hook.return.type';

const ScrollareaTrackHook = ({
  contentRef,
  setInitialScrollTop,
  setInitialPointerY,
  setIsDragging,
  thumbRef,
  trackRef,
}: ScrollareaTrackHookPropsType): ScrollareaTrackHookReturnType => {
  const { handleTrackMouseDownEvent, handleTrackTouchStartEvent } = ScrollareaTrackHandlers({
    contentRef,
    setInitialScrollTop,
    setInitialPointerY,
    setIsDragging,
    thumbRef,
    trackRef,
  });

  return {
    handleTrackMouseDownEvent,
    handleTrackTouchStartEvent,
  };
};

export { ScrollareaTrackHook };
