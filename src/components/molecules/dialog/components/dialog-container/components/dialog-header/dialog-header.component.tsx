// Vendors
import React from 'react';
// Components
import { DialogCloseButtonComponent } from './components/dialog-close-button/dialog-close-button.component';
import { DialogFullscreenButtonComponent } from './components/dialog-fullscreen-button/dialog-fullscreen-button.component';
import { TitleComponent } from 'components/atoms/title/title.component';
// Hooks
import { DialogHeaderHook } from './hooks/dialog-header.hook';
// Styles
import {
  DialogHeaderComponentStyled,
  DialogHeaderComponentActionsStyled,
} from './styles/dialog-header.component.styled';
// Types
import { DialogHeaderComponentPropsType } from './types/dialog-header.component.props.type';

// Enums
import { TitleComponentFontSizeEnum } from 'components/atoms/title/enums/title.component.enums';

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
  titleProps,
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
      <TitleComponent
        {...{
          fontSize: TitleComponentFontSizeEnum.LARGE,
          ...titleProps,
        }}>
        {title}
      </TitleComponent>
      <DialogHeaderComponentActionsStyled>
        <DialogFullscreenButtonComponent {...{ setIsFullscreen, ...buttonFullscreenProps }} />
        <DialogCloseButtonComponent {...{ onClose, ...buttonCloseProps }} />
      </DialogHeaderComponentActionsStyled>
    </DialogHeaderComponentStyled>
  );
};

export { DialogHeaderComponent };
