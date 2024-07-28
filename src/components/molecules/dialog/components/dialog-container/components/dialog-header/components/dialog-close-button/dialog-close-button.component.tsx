// Vendors
import React from 'react';
// Components
import { ButtonComponent } from 'components/atoms/button/button.component';
import { TooltipComponent } from 'components/atoms/tooltip/tooltip.component';
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
  buttonProps,
  onClose,
  setIsFullscreen,
  tooltipProps,
}: DialogCloseButtonComponentPropsType): React.ReactElement<DialogCloseButtonComponentPropsType> | null => {
  const { handleClickEvent, handlePointerDownEvent, handlePointerUpEvent } = DialogCloseButtonHook({
    onClose,
    setIsFullscreen,
  });

  return (
    <DialogCloseButtonComponentStyled
      {...{ onPointerDown: handlePointerDownEvent, onPointerUp: handlePointerUpEvent }}>
      <TooltipComponent {...tooltipProps}>
        <ButtonComponent
          {...{
            ...buttonProps,
            onClick: handleClickEvent,
            shape: ButtonComponentShapeEnum.CIRCLE,
            variant: ButtonComponentVariantEnum.GHOST,
          }}>
          <X />
        </ButtonComponent>
      </TooltipComponent>
    </DialogCloseButtonComponentStyled>
  );
};

export { DialogCloseButtonComponent };
