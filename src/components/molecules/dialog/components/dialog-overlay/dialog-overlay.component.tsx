// Vendors
import React from 'react';
import ReactDOM from 'react-dom';
// Configurations
import { getOverlayConfiguration } from './configurations/dialog-overlay.configurations';
// Enums
import { DialogOverlayComponentOpacityEnum } from './enums/dialog-overlay.component.enums';
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
  opacity = DialogOverlayComponentOpacityEnum.MEDIUM,
  overlayRef,
  setShouldClose,
  shouldClose,
}: DialogOverlayComponentPropsType): React.ReactElement<DialogOverlayComponentPropsType> => {
  const { handlePointerDownEvent, handlePointerUpEvent } = DialogOverlayHook({
    onClose,
    setShouldClose,
    shouldClose,
  });

  return ReactDOM.createPortal(
    <DialogOverlayComponentStyled
      {...{
        ...getOverlayConfiguration({ animationDuration, hasAnimation }),
        onPointerDown: handlePointerDownEvent,
        onPointerUp: handlePointerUpEvent,
        opacity,
        ref: overlayRef,
      }}>
      {children}
    </DialogOverlayComponentStyled>,
    document.body
  );
};

export { DialogOverlayComponent };
