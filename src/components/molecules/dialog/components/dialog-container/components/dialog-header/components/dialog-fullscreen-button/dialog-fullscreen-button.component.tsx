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
// Types
import { DialogFullscreenButtonComponentPropsType } from './types/dialog-fullscreen-button.component.props.type';

const DialogFullscreenButtonComponent = ({
  buttonProps,
  setIsFullScreen,
  tooltipProps,
}: DialogFullscreenButtonComponentPropsType): React.ReactElement<DialogFullscreenButtonComponentPropsType> | null => {
  const { handleClickEvent, handleStopPropagation } = DialogFullscreenButtonHook({
    setIsFullScreen,
  });

  return (
    <TooltipComponent
      {...{
        ...tooltipProps,
        onMouseDown: handleStopPropagation,
        // onTouchStart: handleStopPropagation,
      }}>
      <ButtonComponent
        {...{
          ...buttonProps,
          onClick: handleClickEvent,
          // onMouseDown: handleStopPropagation,
          // onTouchStart: handleStopPropagation,
          shape: ButtonComponentShapeEnum.CIRCLE,
          variant: ButtonComponentVariantEnum.GHOST,
        }}>
        <Expand />
      </ButtonComponent>
    </TooltipComponent>
  );
};

export { DialogFullscreenButtonComponent };
