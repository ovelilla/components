// Vendors
import React from 'react';
// Hooks
import { ScrollareaThumbHook } from './hooks/scrollarea-thumb.hook';
// Styles
import { ScrollareaThumbComponentStyled } from './styles/scrollarea-thumb.component.styled';
// Types
import { ScrollareaThumbComponentPropsType } from './types/scrollarea-thumb.component.props.type';

const ScrollareaThumbComponent = ({
  borderRadius,
  contentRef,
  // gap,
  initialPointerY,
  initialScrollTop,
  isDragging,
  setInitialPointerY,
  setInitialScrollTop,
  setIsDragging,
  setThumbHeight,
  setThumbTranslateY,
  size,
  thumbHeight,
  thumbRef,
  thumbTranslateY,
  trackRef,
}: ScrollareaThumbComponentPropsType): React.ReactElement<ScrollareaThumbComponentPropsType> => {
  const { handleThumbMouseDownEvent, handleThumbTouchStartEvent } = ScrollareaThumbHook({
    contentRef,
    initialPointerY,
    initialScrollTop,
    isDragging,
    setInitialPointerY,
    setInitialScrollTop,
    setIsDragging,
    setThumbHeight,
    setThumbTranslateY,
    thumbRef,
    trackRef,
  });
  return (
    <ScrollareaThumbComponentStyled
      {...{
        borderRadius,
        onMouseDown: handleThumbMouseDownEvent,
        onTouchStart: handleThumbTouchStartEvent,
        ref: thumbRef,
        size,
        thumbHeight,
        thumbTranslateY,
      }}
    />
  );
};

export { ScrollareaThumbComponent };
