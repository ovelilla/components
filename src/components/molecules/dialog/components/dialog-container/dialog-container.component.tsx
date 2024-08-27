// Vendors
import React from 'react';
// Components
import { DialogContentComponent } from './components/dialog-content/dialog-content.component';
import { DialogHeaderComponent } from './components/dialog-header/dialog-header.component';
import { DialogSlideAnimationComponent } from './components/dialog-slide-animation/dialog-slide-animation.component';
import { DialogResizeComponent } from './components/dialog-resize/dialog-resize.component';
// Hooks
import { DialogContainerHook } from './hooks/dialog-container.hook';
// Styles
import { DialogContainerComponentStyled } from './styles/dialog-container.component.styled';
// Types
import { DialogContainerComponentPropsType } from './types/dialog-container.component.props.type';

const DialogContainerComponent = ({
  animation,
  buttonCloseProps,
  buttonFullscreenProps,
  children,
  isFullscreen: initialIsFullscreen,
  minSize: initialMinSize,
  onClose,
  position: initialPosition,
  setShouldClose,
  size: initialSize,
  style,
  title,
}: DialogContainerComponentPropsType): React.ReactElement<DialogContainerComponentPropsType> => {
  const {
    containerRef,
    handlePointerDownEvent,
    handlePointerUpEvent,
    isFullscreen,
    minSize,
    position,
    setIsFullscreen,
    setPosition,
    setSize,
    setTranslate,
    size,
    translate,
  } = DialogContainerHook({
    initialIsFullscreen,
    initialMinSize,
    initialPosition,
    initialSize,
    setShouldClose,
  });

  return (
    <DialogContainerComponentStyled
      {...{
        isFullscreen,
        minSize,
        onPointerDown: handlePointerDownEvent,
        onPointerUp: handlePointerUpEvent,
        position,
        ref: containerRef,
        size,
        translate,
      }}>
      <DialogSlideAnimationComponent {...animation}>
        <DialogContentComponent {...{ ...style, isFullscreen }}>
          <DialogResizeComponent
            {...{
              isFullscreen,
              minSize,
              setSize,
              setTranslate,
              size,
              translate,
            }}
          />
          <DialogHeaderComponent
            {...{
              buttonCloseProps,
              buttonFullscreenProps,
              isFullscreen,
              onClose,
              setIsFullscreen,
              setPosition,
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
