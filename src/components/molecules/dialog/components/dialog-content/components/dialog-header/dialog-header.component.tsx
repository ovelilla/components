// Vendors
import React from 'react';
// Components
import { DialogCloseButtonComponent } from './components/dialog-close-button/dialog-close-button.component';
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
  onClose,
  setTranslate,
  showCloseButton,
  // showFullScreenButton,
  showTooltips,
  title,
  translate,
}: DialogHeaderComponentPropsType): React.ReactElement<DialogHeaderComponentPropsType> | null => {
  const { handleMouseDownEvent } = DialogHeaderHook({
    translate,
    setTranslate,
  });

  return (
    <DialogHeaderComponentStyled {...{ onMouseDown: handleMouseDownEvent }}>
      <DialogHeaderComponentTitleStyled>{title}</DialogHeaderComponentTitleStyled>
      <DialogHeaderComponentActionsStyled>
        <DialogCloseButtonComponent {...{ onClose, showCloseButton, showTooltips }} />
      </DialogHeaderComponentActionsStyled>
    </DialogHeaderComponentStyled>
  );
};

export { DialogHeaderComponent };
