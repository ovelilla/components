// Types
import { ScrollareaTrackHandlersPropsType } from './types/scrollarea-track.handlers.props.type';
import { ScrollareaTrackHandlersReturnType } from './types/scrollarea-track.handlers.return.type';
import { TrackPointerDownEventHandlerPropsType } from './types/track-pointer-down-event-handler.props.type';

const trackPointerDownEventHandler = ({
  contentRef,
  event,
  thumbRef,
  trackRef,
}: TrackPointerDownEventHandlerPropsType): void => {
  event.preventDefault();

  if (!contentRef.current || !thumbRef.current || !trackRef.current) {
    return;
  }

  const contentClientHeight = contentRef.current.clientHeight;
  const contentScrollHeight = contentRef.current.scrollHeight;
  const trackClientHeight = trackRef.current.clientHeight;
  const trackClientTop = trackRef.current.getBoundingClientRect().top;
  const thumbClientHeight = thumbRef.current.clientHeight;

  const thumbCenterPosition = event.clientY - trackClientTop - thumbClientHeight / 2;
  const scrollableTrackHeight = trackClientHeight - thumbClientHeight;
  const thumbPositionRatio = thumbCenterPosition / scrollableTrackHeight;
  const scrollableContentHeight = contentScrollHeight - contentClientHeight;
  const contentScrollTop = thumbPositionRatio * scrollableContentHeight;

  contentRef.current.scrollTop = contentScrollTop;

  const newEvent = new PointerEvent('pointerdown', {
    bubbles: true,
    cancelable: true,
    clientX: event.clientX,
    clientY: event.clientY,
  });

  thumbRef.current.dispatchEvent(newEvent);
};

const ScrollareaTrackHandlers = ({
  contentRef,
  thumbRef,
  trackRef,
}: ScrollareaTrackHandlersPropsType): ScrollareaTrackHandlersReturnType => {
  return {
    handleTrackPointerDownEvent: (event) =>
      trackPointerDownEventHandler({
        contentRef,
        event,
        thumbRef,
        trackRef,
      }),
  };
};

export { ScrollareaTrackHandlers };
