// Vendors
import React from 'react';
// Enums
import { ScrollareaComponentVariantEnum } from '../../enums/scrollarea.component.enums';
// Hooks
import { ScrollareaTrackHook } from './hooks/scrollarea-track.hook';
// Styles
import { ScrollareaTrackComponentStyled } from './styles/scrollarea-track.component.styled';
// Types
import { ScrollareaTrackComponentPropsType } from './types/scrollarea-track.component.props.type';

const ScrollareaTrackComponent = ({
  borderRadius,
  children,
  contentRef,
  isHovered,
  setInitialScrollTop,
  setInitialPointerY,
  setIsDragging,
  size,
  thumbRef,
  trackRef,
  variant,
}: ScrollareaTrackComponentPropsType): React.ReactElement<ScrollareaTrackComponentPropsType> | null => {
  const { handleTrackMouseDownEvent, handleTrackTouchStartEvent } = ScrollareaTrackHook({
    contentRef,
    setInitialScrollTop,
    setInitialPointerY,
    setIsDragging,
    thumbRef,
    trackRef,
  });
  if (
    variant === ScrollareaComponentVariantEnum.HIDDEN ||
    (variant === ScrollareaComponentVariantEnum.HOVER && !isHovered)
  ) {
    return null;
  }
  return (
    <ScrollareaTrackComponentStyled
      {...{
        borderRadius,
        onMouseDown: handleTrackMouseDownEvent,
        onTouchStart: handleTrackTouchStartEvent,
        ref: trackRef,
        size,
        variant,
      }}>
      {children}
    </ScrollareaTrackComponentStyled>
  );
};

export { ScrollareaTrackComponent };
