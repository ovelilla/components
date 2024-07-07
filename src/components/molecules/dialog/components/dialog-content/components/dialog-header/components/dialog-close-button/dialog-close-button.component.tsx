// Vendors
import React from 'react';
// Components
import { ButtonComponent } from 'components/atoms/button/button.component';
// Enums
import {
  ButtonComponentShapeEnum,
  ButtonComponentVariantEnum,
} from 'components/atoms/button/enums/button.component.enums';
// Hooks
import { DialogCloseButtonHook } from './hooks/dialog-close-button.hook';
// Icons
import { X } from 'lucide-react';
// Styles
import { DialogCloseButtonComponentStyled } from './styles/dialog-close-button.component.styled';
// Types
import { DialogCloseButtonComponentPropsType } from './types/dialog-close-button.component.props.type';

const DialogCloseButtonComponent = ({
  onClose,
  showCloseButton,
  // showTooltips,
}: DialogCloseButtonComponentPropsType): React.ReactElement<DialogCloseButtonComponentPropsType> | null => {
  const { handleClickEvent } = DialogCloseButtonHook({ onClose });

  if (!showCloseButton) {
    return null;
  }

  return (
    <DialogCloseButtonComponentStyled>
      <ButtonComponent
        {...{
          onClick: handleClickEvent,
          shape: ButtonComponentShapeEnum.CIRCLE,
          variant: ButtonComponentVariantEnum.GHOST,
        }}>
        <X />
      </ButtonComponent>
    </DialogCloseButtonComponentStyled>
  );
};

export { DialogCloseButtonComponent };
