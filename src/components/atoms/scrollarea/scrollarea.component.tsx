// Vendors
import React from 'react';
// Components
import { ScrollareaContentComponent } from './components/scrollarea-content/scrollarea-content.component';
import { ScrollareaThumbComponent } from './components/scroll-area-thumb/scrollarea-thumb.component';
import { ScrollareaTrackComponent } from './components/scrollarea-track/scrollarea-track.component';
// Enums
import {
  ScrollareaComponentBorderRadiusEnum,
  ScrollareaComponentGapEnum,
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
  size = ScrollareaComponentSizeEnum.MEDIUM,
  variant = ScrollareaComponentVariantEnum.VISIBLE,
}: ScrollareaComponentPropsType): React.ReactElement<ScrollareaComponentPropsType> => {
  const {
    contentRef,
    handleMouseEnterEvent,
    handleMouseLeaveEvent,
    initialPointerY,
    initialScrollTop,
    isDragging,
    isHovered,
    setInitialPointerY,
    setInitialScrollTop,
    setIsDragging,
    setThumbHeight,
    setThumbTranslateY,
    thumbHeight,
    thumbRef,
    thumbTranslateY,
    trackRef,
  } = ScrollareaHook();
  return (
    <ScrollareaComponentStyled
      {...{
        gap,
        onMouseEnter: handleMouseEnterEvent,
        onMouseLeave: handleMouseLeaveEvent,
        variant,
      }}>
      <ScrollareaContentComponent {...{ contentRef, setThumbTranslateY, thumbRef, trackRef }}>
        {children}
      </ScrollareaContentComponent>
      <ScrollareaTrackComponent
        {...{
          borderRadius,
          contentRef,
          isHovered,
          setInitialScrollTop,
          setInitialPointerY,
          setIsDragging,
          size,
          thumbRef,
          trackRef,
          variant,
        }}>
        <ScrollareaThumbComponent
          {...{
            borderRadius,
            contentRef,
            gap,
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
          }}
        />
      </ScrollareaTrackComponent>
    </ScrollareaComponentStyled>
  );
};

export { ScrollareaComponent };
