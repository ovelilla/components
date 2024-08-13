// Vendors
import React from 'react';
import ReactDOM from 'react-dom';
// Configurations
import { getOverlayAnimationConfiguration } from './configurations/dialog-overlay.configurations';
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
  setShouldClose,
  shouldClose,
  style,
}: DialogOverlayComponentPropsType): React.ReactElement<DialogOverlayComponentPropsType> => {
  const { handlePointerDownEvent, handlePointerUpEvent, overlayRef } = DialogOverlayHook({
    onClose,
    setShouldClose,
    shouldClose,
  });

  return ReactDOM.createPortal(
    <DialogOverlayComponentStyled
      {...{
        ...getOverlayAnimationConfiguration({ ...animation }),
        ...style,
        onPointerDown: handlePointerDownEvent,
        onPointerUp: handlePointerUpEvent,
        ref: overlayRef,
      }}>
      {children}
    </DialogOverlayComponentStyled>,
    document.body
  );
};

export { DialogOverlayComponent };
