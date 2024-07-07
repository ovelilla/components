// Vendors
import React from 'react';
// Components
import { DialogHeaderComponent } from './components/dialog-header/dialog-header.component';
// Configurations
import { getOverlayConfiguration } from './configurations/dialog-overlay.configurations';
// Hooks
import { DialogContentHook } from './hooks/dialog-content.hook';
// Styles
import {
  DialogContentComponentStyled,
  DialogContentComponentAnimatedStyled,
} from './styles/dialog-content.component.styled';
// Types
import { DialogContentComponentPropsType } from './types/dialog-content.component.props.type';

const DialogContentComponent = ({
  animationDuration,
  borderRadius,
  children,
  hasAnimation,
  maxWidth,
  onClose,
  padding,
  setShouldClose,
  showCloseButton,
  showFullScreenButton,
  showTooltips,
  title,
}: DialogContentComponentPropsType): React.ReactElement<DialogContentComponentPropsType> => {
  const {
    contentRef,
    handleMouseDownEvent,
    handleMouseUpEvent,
    handleTouchStartEvent,
    handleTouchEndEvent,
    position,
    setTranslate,
    translate,
  } = DialogContentHook({
    setShouldClose,
  });

  return (
    <DialogContentComponentStyled
      {...{
        maxWidth,
        onMouseDown: handleMouseDownEvent,
        onMouseUp: handleMouseUpEvent,
        onTouchStart: handleTouchStartEvent,
        onTouchEnd: handleTouchEndEvent,
        position,
        ref: contentRef,
        translate,
      }}>
      <DialogContentComponentAnimatedStyled
        {...{
          ...getOverlayConfiguration({ animationDuration, hasAnimation }),
          borderRadius,
          padding,
        }}>
        <DialogHeaderComponent
          {...{
            onClose,
            translate,
            setTranslate,
            showCloseButton,
            showFullScreenButton,
            showTooltips,
            title,
          }}
        />
        {children}
      </DialogContentComponentAnimatedStyled>
    </DialogContentComponentStyled>
  );
};

export { DialogContentComponent };
