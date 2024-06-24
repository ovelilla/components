// Types
import { ScrollareaTrackHandlersPropsType } from './types/scrollarea-track.handlers.props.type';
import { ScrollareaTrackHandlersReturnType } from './types/scrollarea-track.handlers.return.type';
import { TrackMouseDownEventHandlerPropsType } from './types/track-mouse-down-event-handler.props.type';
import { TrackTouchStartEventHandlerPropsType } from './types/track-touch-start-event-handler.props.type';
// Utils
import { getContentScrollTop } from '../utils/scrollarea-track.utils';

const trackMouseDownEventHandler = ({
  contentRef,
  event,
  setInitialScrollTop,
  setInitialPointerY,
  setIsDragging,
  thumbRef,
  trackRef,
}: TrackMouseDownEventHandlerPropsType): void => {
  event.preventDefault();
  if (!contentRef.current) {
    return;
  }
  const clientY = event.clientY;
  const contentScrollTop = getContentScrollTop({ clientY, contentRef, thumbRef, trackRef });
  contentRef.current.scrollTop = contentScrollTop;
  setInitialPointerY(clientY);
  setInitialScrollTop(contentScrollTop);
  setIsDragging(true);
};

const trackTouchStartEventHandler = ({
  contentRef,
  event,
  setInitialScrollTop,
  setInitialPointerY,
  setIsDragging,
  thumbRef,
  trackRef,
}: TrackTouchStartEventHandlerPropsType): void => {
  if (!contentRef.current) {
    return;
  }
  const clientY = event.touches[0].clientY;
  const contentScrollTop = getContentScrollTop({ clientY, contentRef, thumbRef, trackRef });
  contentRef.current.scrollTop = contentScrollTop;
  setInitialPointerY(clientY);
  setInitialScrollTop(contentScrollTop);
  setIsDragging(true);
};

const ScrollareaTrackHandlers = ({
  contentRef,
  setInitialScrollTop,
  setInitialPointerY,
  setIsDragging,
  thumbRef,
  trackRef,
}: ScrollareaTrackHandlersPropsType): ScrollareaTrackHandlersReturnType => {
  return {
    handleTrackMouseDownEvent: (event) =>
      trackMouseDownEventHandler({
        contentRef,
        event,
        setInitialScrollTop,
        setInitialPointerY,
        setIsDragging,
        thumbRef,
        trackRef,
      }),
    handleTrackTouchStartEvent: (event) =>
      trackTouchStartEventHandler({
        contentRef,
        event,
        setInitialScrollTop,
        setInitialPointerY,
        setIsDragging,
        thumbRef,
        trackRef,
      }),
  };
};

export { ScrollareaTrackHandlers };
