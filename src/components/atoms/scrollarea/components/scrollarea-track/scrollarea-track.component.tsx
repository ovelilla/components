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
  position,
  showScrollbar,
  showTrack,
  size,
  thumbRef,
  trackRef,
  variant,
}: ScrollareaTrackComponentPropsType): React.ReactElement<ScrollareaTrackComponentPropsType> | null => {
  const { handleTrackPointerDownEvent } = ScrollareaTrackHook({
    contentRef,
    thumbRef,
    trackRef,
  });

  if (
    variant === ScrollareaComponentVariantEnum.HIDDEN ||
    (variant === ScrollareaComponentVariantEnum.HOVER && !showScrollbar)
  ) {
    return null;
  }

  return (
    <ScrollareaTrackComponentStyled
      {...{
        borderRadius,
        onPointerDown: handleTrackPointerDownEvent,
        position,
        ref: trackRef,
        showTrack,
        size,
        variant,
      }}>
      {children}
    </ScrollareaTrackComponentStyled>
  );
};

export { ScrollareaTrackComponent };
