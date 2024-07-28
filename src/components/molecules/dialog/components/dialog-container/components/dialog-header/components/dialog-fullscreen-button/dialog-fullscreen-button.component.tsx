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
import { DialogFullscreenButtonHook } from './hooks/dialog-fullscreen-button.hook';
// Icons
import { Expand } from 'lucide-react';
// Styles
import { DialogFullscreenButtonComponentStyled } from './styles/dialog-fullscreen-button.component.styled';
// Types
import { DialogFullscreenButtonComponentPropsType } from './types/dialog-fullscreen-button.component.props.type';

const DialogFullscreenButtonComponent = ({
  buttonProps,
  setIsFullscreen,
  tooltipProps,
}: DialogFullscreenButtonComponentPropsType): React.ReactElement<DialogFullscreenButtonComponentPropsType> | null => {
  const { handleClickEvent, handlePointerDownEvent, handlePointerUpEvent } =
    DialogFullscreenButtonHook({
      setIsFullscreen,
    });

  return (
    <DialogFullscreenButtonComponentStyled
      {...{ onPointerDown: handlePointerDownEvent, onPointerUp: handlePointerUpEvent }}>
      <TooltipComponent {...tooltipProps}>
        <ButtonComponent
          {...{
            ...buttonProps,
            onClick: handleClickEvent,
            shape: ButtonComponentShapeEnum.CIRCLE,
            variant: ButtonComponentVariantEnum.GHOST,
          }}>
          <Expand />
        </ButtonComponent>
      </TooltipComponent>
    </DialogFullscreenButtonComponentStyled>
  );
};

export { DialogFullscreenButtonComponent };
