// Vendors
import React from 'react';
import ReactDOM from 'react-dom';
// Configurations
import { getOverlayConfiguration } from './configurations/dialog-overlay.configurations';
// Hooks
import { DialogOverlayHook } from './hooks/dialog-overlay.hook';
// Styles
import { DialogOverlayComponentStyled } from './styles/dialog-overlay.component.styled';
// Types
import { DialogOverlayComponentPropsType } from './types/dialog-overlay.component.props.type';

const DialogOverlayComponent = ({
  animationDuration,
  children,
  hasAnimation,
  onClose,
  overlayRef,
  setShouldClose,
  shouldClose,
}: DialogOverlayComponentPropsType): React.ReactElement<DialogOverlayComponentPropsType> => {
  const { handleMouseDownEvent, handleMouseUpEvent, handleTouchStartEvent, handleTouchEndEvent } =
    DialogOverlayHook({
      onClose,
      setShouldClose,
      shouldClose,
    });

  return ReactDOM.createPortal(
    <DialogOverlayComponentStyled
      {...{
        ...getOverlayConfiguration({ animationDuration, hasAnimation }),
        onMouseDown: handleMouseDownEvent,
        onMouseUp: handleMouseUpEvent,
        onTouchStart: handleTouchStartEvent,
        onTouchEnd: handleTouchEndEvent,
        ref: overlayRef,
      }}>
      {children}
    </DialogOverlayComponentStyled>,
    document.body
  );
};

export { DialogOverlayComponent };
