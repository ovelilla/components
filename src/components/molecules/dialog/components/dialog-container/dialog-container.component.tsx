// Vendors
import React from 'react';
// Components
import { DialogHeaderComponent } from './components/dialog-header/dialog-header.component';
import { DialogResizeComponent } from './components/dialog-resize/dialog-resize.component';
import { ScrollareaComponent } from 'components/atoms/scrollarea/scrollarea.component';
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
  open,
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
        ...style,
        animation,
        isFullscreen,
        minSize,
        onPointerDown: handlePointerDownEvent,
        onPointerUp: handlePointerUpEvent,
        open,
        position,
        ref: containerRef,
        size,
        translate,
      }}>
      <DialogResizeComponent
        {...{
          disabled: isFullscreen,
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
      <div style={{ flex: 1 }}>
        <ScrollareaComponent>{children}</ScrollareaComponent>
      </div>
    </DialogContainerComponentStyled>
  );
};

export { DialogContainerComponent };
