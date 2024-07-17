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
// Types
import { DialogCloseButtonComponentPropsType } from './types/dialog-close-button.component.props.type';

const DialogCloseButtonComponent = ({
  buttonProps,
  onClose,
  setIsFullScreen,
  tooltipProps,
}: DialogCloseButtonComponentPropsType): React.ReactElement<DialogCloseButtonComponentPropsType> | null => {
  const { handleClickEvent, handleStopPropagation } = DialogCloseButtonHook({
    onClose,
    setIsFullScreen,
  });

  return (
    <TooltipComponent {...tooltipProps}>
      <ButtonComponent
        {...{
          ...buttonProps,
          onClick: handleClickEvent,
          onMouseDown: handleStopPropagation,
          onTouchStart: handleStopPropagation,
          shape: ButtonComponentShapeEnum.CIRCLE,
          variant: ButtonComponentVariantEnum.GHOST,
        }}>
        <X />
      </ButtonComponent>
    </TooltipComponent>
  );
};

export { DialogCloseButtonComponent };
