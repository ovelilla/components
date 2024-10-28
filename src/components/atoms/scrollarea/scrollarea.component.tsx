// Vendors
import React from 'react';
// Components
import { ScrollareaContentComponent } from './components/scrollarea-content/scrollarea-content.component';
import { ScrollareaThumbComponent } from './components/scroll-area-thumb/scrollarea-thumb.component';
import { ScrollareaTrackComponent } from './components/scrollarea-track/scrollarea-track.component';
// Constants
import { DEFAULT_HIDE_DELAY, DEFAULT_SHOW_TRACK } from './constants/scrollarea.component.constants';
// Enums
import {
  ScrollareaComponentBorderRadiusEnum,
  ScrollareaComponentGapEnum,
  ScrollareaComponentPositionEnum,
  ScrollareaComponentSizeEnum,
  ScrollareaComponentVariantEnum,
} from './enums/scrollarea.component.enums';
// Hooks
import { ScrollareaHook } from './hooks/scrollarea.hook';
// Styles
import { ScrollareaComponentStyled } from './styles/scrollarea.component.styled';
// Types
import { ScrollareaComponentPropsType } from './types/scrollarea.component.props.type';

const ScrollareaComponent = ({
  borderRadius = ScrollareaComponentBorderRadiusEnum.FULL,
  children,
  gap = ScrollareaComponentGapEnum.NONE,
  hideDelay = DEFAULT_HIDE_DELAY,
  position = ScrollareaComponentPositionEnum.RELATIVE,
  showTrack = DEFAULT_SHOW_TRACK,
  size = ScrollareaComponentSizeEnum.MEDIUM,
  variant = ScrollareaComponentVariantEnum.VISIBLE,
}: ScrollareaComponentPropsType): React.ReactElement<ScrollareaComponentPropsType> => {
  const {
    contentRef,
    handleMouseEnterEvent,
    handleMouseLeaveEvent,
    hasScrollbar,
    scrollareaRef,
    setIsDragging,
    setShowScrollbar,
    setThumbTranslateY,
    showScrollbar,
    thumbHeight,
    thumbRef,
    thumbTranslateY,
    timerRef,
    trackRef,
  } = ScrollareaHook({ hideDelay });
  return (
    <ScrollareaComponentStyled
      {...{
        gap,
        hasScrollbar,
        onMouseEnter: handleMouseEnterEvent,
        onMouseLeave: handleMouseLeaveEvent,
        position,
        ref: scrollareaRef,
        size,
        variant,
      }}>
      <ScrollareaContentComponent
        {...{
          contentRef,
          hideDelay,
          setShowScrollbar,
          setThumbTranslateY,
          thumbRef,
          timerRef,
          trackRef,
        }}>
        {children}
      </ScrollareaContentComponent>
      <ScrollareaTrackComponent
        {...{
          borderRadius,
          contentRef,
          hasScrollbar,
          position,
          showScrollbar,
          showTrack,
          size,
          thumbRef,
          trackRef,
          variant,
        }}>
        <ScrollareaThumbComponent
          {...{
            borderRadius,
            contentRef,
            setIsDragging,
            size,
            thumbHeight,
            thumbRef,
            thumbTranslateY,
            trackRef,
          }}
        />
      </ScrollareaTrackComponent>
    </ScrollareaComponentStyled>
  );
};

export { ScrollareaComponent };
