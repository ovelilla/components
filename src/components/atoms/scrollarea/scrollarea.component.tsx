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
    setIsDragging,
    setThumbTranslateY,
    showScrollbar,
    thumbHeight,
    thumbRef,
    thumbTranslateY,
    trackRef,
  } = ScrollareaHook({ hideDelay });
  return (
    <ScrollareaComponentStyled
      {...{
        gap,
        onMouseEnter: handleMouseEnterEvent,
        onMouseLeave: handleMouseLeaveEvent,
        position,
        size,
        variant,
      }}>
      <ScrollareaContentComponent
        {...{
          contentRef,
          setThumbTranslateY,
          thumbRef,
          trackRef,
        }}>
        {children}
      </ScrollareaContentComponent>
      <ScrollareaTrackComponent
        {...{
          borderRadius,
          contentRef,
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
