// Vendors
import React from 'react';
// Components
import { DialogCloseButtonComponent } from './components/dialog-close-button/dialog-close-button.component';
import { DialogFullscreenButtonComponent } from './components/dialog-fullscreen-button/dialog-fullscreen-button.component';
// Hooks
import { DialogHeaderHook } from './hooks/dialog-header.hook';
// Styles
import {
  DialogHeaderComponentStyled,
  DialogHeaderComponentTitleStyled,
  DialogHeaderComponentActionsStyled,
} from './styles/dialog-header.component.styled';
// Types
import { DialogHeaderComponentPropsType } from './types/dialog-header.component.props.type';

const DialogHeaderComponent = ({
  closeButtonProps,
  fullScreenButtonProps,
  isFullScreen,
  onClose,
  setIsFullScreen,
  setPosition,
  // setSize,
  setTranslate,
  size,
  title,
  translate,
}: DialogHeaderComponentPropsType): React.ReactElement<DialogHeaderComponentPropsType> | null => {
  const { handleMouseDownEvent, handleTouchStartEvent } = DialogHeaderHook({
    isFullScreen,
    translate,
    setIsFullScreen,
    setPosition,
    setTranslate,
    size,
  });

  return (
    <DialogHeaderComponentStyled
      {...{ onMouseDown: handleMouseDownEvent, onTouchStart: handleTouchStartEvent }}>
      <DialogHeaderComponentTitleStyled>{title}</DialogHeaderComponentTitleStyled>
      <DialogHeaderComponentActionsStyled>
        <DialogFullscreenButtonComponent {...{ setIsFullScreen, ...fullScreenButtonProps }} />
        <DialogCloseButtonComponent {...{ onClose, setIsFullScreen, ...closeButtonProps }} />
      </DialogHeaderComponentActionsStyled>
    </DialogHeaderComponentStyled>
  );
};

export { DialogHeaderComponent };
