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
}: DialogHeaderComponentPropsType): React.ReactElement<DialogHeaderComponentPropsType> | null => {
  const { handlePointerDownEvent } = DialogHeaderHook({
    isFullscreen,
    translate,
    setIsFullscreen,
    setPosition,
    setTranslate,
    size,
  });

  return (
    <DialogHeaderComponentStyled {...{ onPointerDown: handlePointerDownEvent }}>
      <DialogHeaderComponentTitleStyled>{title}</DialogHeaderComponentTitleStyled>
      <DialogHeaderComponentActionsStyled>
        <DialogFullscreenButtonComponent {...{ setIsFullscreen, ...buttonFullscreenProps }} />
        <DialogCloseButtonComponent {...{ onClose, setIsFullscreen, ...buttonCloseProps }} />
      </DialogHeaderComponentActionsStyled>
    </DialogHeaderComponentStyled>
  );
};

export { DialogHeaderComponent };
