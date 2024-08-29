// Types
import { ScrollareaThumbHandlersPropsType } from './types/scrollarea-thumb.handlers.props.type';
import { ScrollareaThumbHandlersReturnType } from './types/scrollarea-thumb.handlers.return.type';
import { ThumbPointerDownEventHandlerPropsType } from './types/thumb-pointer-down-event-handler.props.type';

const thumbPointerDownEventHandler = ({
  contentRef,
  event,
  setIsDragging,
  trackRef,
}: ThumbPointerDownEventHandlerPropsType): void => {
  event.stopPropagation();

  if (!contentRef.current) {
    return;
  }

  const initialY = event.clientY;
  const initialScrollTop = contentRef.current.scrollTop;

  setIsDragging(true);

  const handlePointerMoveEvent = (event: MouseEvent) => {
    event.preventDefault();

    if (!contentRef.current || !trackRef.current) {
      return;
    }

    const contentScrollHeight = contentRef.current.scrollHeight;
    const contentClientHeight = contentRef.current.clientHeight;
    const trackClientHeight = trackRef.current.clientHeight;

    const deltaY = event.clientY - initialY;
    const scrollRatio = contentScrollHeight / trackClientHeight;
    const calculatedScrollTop = initialScrollTop + deltaY * scrollRatio;
    const scrollableContentHeight = contentScrollHeight - contentClientHeight;
    const contentScrollTop = Math.max(0, Math.min(calculatedScrollTop, scrollableContentHeight));

    contentRef.current.scrollTop = contentScrollTop;
  };

  const handlePointerUpEvent = (event: MouseEvent) => {
    event.stopPropagation();

    setIsDragging(false);

    document.removeEventListener('pointermove', handlePointerMoveEvent);
    document.removeEventListener('pointerup', handlePointerUpEvent, true);
  };

  document.addEventListener('pointermove', handlePointerMoveEvent);
  document.addEventListener('pointerup', handlePointerUpEvent, true);
};

const ScrollareaThumbHandlers = ({
  contentRef,
  setIsDragging,
  trackRef,
}: ScrollareaThumbHandlersPropsType): ScrollareaThumbHandlersReturnType => {
  return {
    handleThumbPointerDownEvent: (event) =>
      thumbPointerDownEventHandler({
        contentRef,
        event,
        setIsDragging,
        trackRef,
      }),
  };
};

export { ScrollareaThumbHandlers };
