// Vendors
import React from 'react';
import ReactDOM from 'react-dom';
// Hooks
import { DialogOverlayHook } from './hooks/dialog-overlay.hook';
// Styles
import { DialogOverlayComponentStyled } from './styles/dialog-overlay.component.styled';
// Types
import { DialogOverlayComponentPropsType } from './types/dialog-overlay.component.props.type';

const DialogOverlayComponent = ({
  animation,
  children,
  onClose,
  open,
  setShouldClose,
  shouldClose,
  style,
}: DialogOverlayComponentPropsType): React.ReactElement<DialogOverlayComponentPropsType> | null => {
  const {
    handleAnimationEndEvent,
    handlePointerDownEvent,
    handlePointerUpEvent,
    overlayRef,
    shouldRender,
  } = DialogOverlayHook({
    onClose,
    open,
    setShouldClose,
    shouldClose,
  });

  if (!shouldRender) {
    return null;
  }

  return ReactDOM.createPortal(
    <DialogOverlayComponentStyled
      {...{
        ...style,
        animation,
        onAnimationEnd: handleAnimationEndEvent,
        onPointerDown: handlePointerDownEvent,
        onPointerUp: handlePointerUpEvent,
        open,
        ref: overlayRef,
      }}>
      {children}
    </DialogOverlayComponentStyled>,
    document.body
  );
};

export { DialogOverlayComponent };
