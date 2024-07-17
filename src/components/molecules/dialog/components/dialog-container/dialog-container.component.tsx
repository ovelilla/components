// Vendors
import React from 'react';
// Components
import { DialogContentComponent } from './components/dialog-content/dialog-content.component';
import { DialogHeaderComponent } from './components/dialog-header/dialog-header.component';
import { DialogSlideAnimationComponent } from './components/dialog-slide-animation/dialog-slide-animation.component';
// Hooks
import { DialogContainerHook } from './hooks/dialog-container.hook';
// Styles
import { DialogContainerComponentStyled } from './styles/dialog-container.component.styled';
// Types
import { DialogContainerComponentPropsType } from './types/dialog-container.component.props.type';

const DialogContainerComponent = ({
  animationDuration,
  children,
  closeButtonProps,
  contentProps,
  fullScreenButtonProps,
  hasAnimation,
  onClose,
  setShouldClose,
  size: initialSize,
  title,
}: DialogContainerComponentPropsType): React.ReactElement<DialogContainerComponentPropsType> => {
  const {
    contentRef,
    handleMouseDownEvent,
    handleMouseUpEvent,
    handleTouchEndEvent,
    handleTouchStartEvent,
    isFullScreen,
    position,
    setIsFullScreen,
    setPosition,
    setSize,
    setTranslate,
    size,
    translate,
  } = DialogContainerHook({
    initialSize,
    setShouldClose,
  });

  return (
    <DialogContainerComponentStyled
      {...{
        isFullScreen,
        onMouseDown: handleMouseDownEvent,
        onMouseUp: handleMouseUpEvent,
        onTouchEnd: handleTouchEndEvent,
        onTouchStart: handleTouchStartEvent,
        position,
        ref: contentRef,
        size,
        translate,
      }}>
      <DialogSlideAnimationComponent {...{ animationDuration, hasAnimation }}>
        <DialogContentComponent {...{ ...contentProps, isFullScreen }}>
          <DialogHeaderComponent
            {...{
              closeButtonProps,
              fullScreenButtonProps,
              isFullScreen,
              onClose,
              setIsFullScreen,
              setPosition,
              setSize,
              setTranslate,
              size,
              title,
              translate,
            }}
          />
          {children}
        </DialogContentComponent>
      </DialogSlideAnimationComponent>
    </DialogContainerComponentStyled>
  );
};

export { DialogContainerComponent };
