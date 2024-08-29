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
  setIsDragging,
  size,
  thumbHeight,
  thumbRef,
  thumbTranslateY,
  trackRef,
}: ScrollareaThumbComponentPropsType): React.ReactElement<ScrollareaThumbComponentPropsType> => {
  const { handleThumbPointerDownEvent } = ScrollareaThumbHook({
    contentRef,
    setIsDragging,
    trackRef,
  });
  return (
    <ScrollareaThumbComponentStyled
      {...{
        borderRadius,
        onPointerDown: handleThumbPointerDownEvent,
        ref: thumbRef,
        size,
        thumbHeight,
        thumbTranslateY,
      }}
    />
  );
};

export { ScrollareaThumbComponent };
