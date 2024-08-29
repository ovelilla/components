// Handlers
import { ScrollareaTrackHandlers } from '../handlers/scrollarea-track.handlers';
// Types
import { ScrollareaTrackHookPropsType } from './types/scrollarea-track.hook.props.type';
import { ScrollareaTrackHookReturnType } from './types/scrollarea-track.hook.return.type';

const ScrollareaTrackHook = ({
  contentRef,
  thumbRef,
  trackRef,
}: ScrollareaTrackHookPropsType): ScrollareaTrackHookReturnType => {
  const { handleTrackPointerDownEvent } = ScrollareaTrackHandlers({
    contentRef,
    thumbRef,
    trackRef,
  });

  return {
    handleTrackPointerDownEvent,
  };
};

export { ScrollareaTrackHook };
