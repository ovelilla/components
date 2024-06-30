// Types
import { ResizeEventHandlerPropsType } from './types/resize-event-handler.props.type';
import { ScrollareaThumbHandlersPropsType } from './types/scrollarea-thumb.handlers.props.type';
import { ScrollareaThumbHandlersReturnType } from './types/scrollarea-thumb.handlers.return.type';
import { ThumbMouseDownEventHandlerPropsType } from './types/thumb-mouse-down-event-handler.props.type';
import { ThumbMouseMoveEventHandlerPropsType } from './types/thumb-mouse-move-event-handler.props.type';
import { ThumbMouseUpEventHandlerPropsType } from './types/thumb-mouse-up-event-handler.props.type';
import { ThumbTouchStartEventHandlerPropsType } from './types/thumb-touch-start-event-handler.props.type';
import { ThumbTouchMoveEventHandlerPropsType } from './types/thumb-touch-move-event-handler.props.type';
import { ThumbTouchEndEventHandlerPropsType } from './types/thumb-touch-end-event-handler.props.type';
// Utils
import {
  getContentScrollTop,
  getThumbHeight,
  getThumbTranslateY,
} from '../utils/scrollarea-thumb.utils';

const resizeEventHandler = ({
  contentRef,
  setThumbHeight,
  setThumbTranslateY,
  thumbRef,
  trackRef,
}: ResizeEventHandlerPropsType): void => {
  setThumbHeight(getThumbHeight({ contentRef, trackRef }));
  setThumbTranslateY(getThumbTranslateY({ contentRef, thumbRef, trackRef }));
};

const thumbMouseDownEventHandler = ({
  contentRef,
  event,
  setInitialScrollTop,
  setInitialPointerY,
  setIsDragging,
}: ThumbMouseDownEventHandlerPropsType): void => {
  event.preventDefault();
  event.stopPropagation();
  if (contentRef.current) {
    setInitialPointerY(event.clientY);
    setInitialScrollTop(contentRef.current.scrollTop);
    setIsDragging(true);
  }
};

const thumbMouseMoveEventHandler = ({
  contentRef,
  event,
  initialPointerY,
  initialScrollTop,
  isDragging,
  thumbRef,
  trackRef,
}: ThumbMouseMoveEventHandlerPropsType): void => {
  if (isDragging && contentRef.current) {
    contentRef.current.scrollTop = getContentScrollTop({
      clientY: event.clientY,
      contentRef,
      initialPointerY,
      initialScrollTop,
      thumbRef,
      trackRef,
    });
  }
};

const thumbMouseUpEventHandler = ({
  setInitialScrollTop,
  setInitialPointerY,
  setIsDragging,
}: ThumbMouseUpEventHandlerPropsType): void => {
  setInitialScrollTop(0);
  setInitialPointerY(0);
  setIsDragging(false);
};

const thumbTouchStartEventHandler = ({
  contentRef,
  event,
  setInitialScrollTop,
  setInitialPointerY,
  setIsDragging,
}: ThumbTouchStartEventHandlerPropsType): void => {
  event.stopPropagation();
  if (contentRef.current) {
    setInitialPointerY(event.touches[0].clientY);
    setInitialScrollTop(contentRef.current.scrollTop);
    setIsDragging(true);
  }
};

const thumbTouchMoveEventHandler = ({
  contentRef,
  event,
  initialPointerY,
  initialScrollTop,
  isDragging,
  thumbRef,
  trackRef,
}: ThumbTouchMoveEventHandlerPropsType): void => {
  if (isDragging && contentRef.current) {
    event.preventDefault();
    contentRef.current.scrollTop = getContentScrollTop({
      contentRef,
      clientY: event.touches[0].clientY,
      initialPointerY,
      initialScrollTop,
      thumbRef,
      trackRef,
    });
  }
};

const thumbTouchEndEventHandler = ({
  setInitialScrollTop,
  setInitialPointerY,
  setIsDragging,
}: ThumbTouchEndEventHandlerPropsType): void => {
  setInitialScrollTop(0);
  setInitialPointerY(0);
  setIsDragging(false);
};

const ScrollareaThumbHandlers = ({
  contentRef,
  initialScrollTop,
  initialPointerY,
  isDragging,
  setInitialScrollTop,
  setInitialPointerY,
  setIsDragging,
  setThumbHeight,
  setThumbTranslateY,
  thumbRef,
  trackRef,
}: ScrollareaThumbHandlersPropsType): ScrollareaThumbHandlersReturnType => {
  return {
    handleResizeEvent: () =>
      resizeEventHandler({ contentRef, setThumbHeight, setThumbTranslateY, thumbRef, trackRef }),
    handleThumbMouseDownEvent: (event) =>
      thumbMouseDownEventHandler({
        contentRef,
        event,
        setInitialScrollTop,
        setInitialPointerY,
        setIsDragging,
        thumbRef,
        trackRef,
      }),
    handleThumbMouseMoveEvent: (event) =>
      thumbMouseMoveEventHandler({
        contentRef,
        event,
        initialPointerY,
        initialScrollTop,
        isDragging,
        thumbRef,
        trackRef,
      }),
    handleThumbMouseUpEvent: () =>
      thumbMouseUpEventHandler({ setInitialScrollTop, setInitialPointerY, setIsDragging }),
    handleThumbTouchStartEvent: (event) =>
      thumbTouchStartEventHandler({
        contentRef,
        event,
        setInitialScrollTop,
        setInitialPointerY,
        setIsDragging,
        thumbRef,
        trackRef,
      }),
    handleThumbTouchMoveEvent: (event) =>
      thumbTouchMoveEventHandler({
        contentRef,
        event,
        initialPointerY,
        initialScrollTop,
        isDragging,
        thumbRef,
        trackRef,
      }),
    handleThumbTouchEndEvent: () =>
      thumbTouchEndEventHandler({ setInitialScrollTop, setInitialPointerY, setIsDragging }),
  };
};

export { ScrollareaThumbHandlers };
