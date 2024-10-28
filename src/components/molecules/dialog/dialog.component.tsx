// Vendors
import React, { Fragment } from 'react';
// Components
import { DialogContainerComponent } from './components/dialog-container/dialog-container.component';
import { DialogOverlayComponent } from './components/dialog-overlay/dialog-overlay.component';
// Constants
import { DEFAULT_IS_FULL_SCREEN } from './constants/dialog.component.constants';
// Hooks
import { DialogHook } from './hooks/dialog.hook';
// Styles
import { GlobalStyle } from './styles/dialog.component.styled';
// Types
import { DialogComponentPropsType } from './types/dialog.component.props.type';

const DialogComponent = ({
  animation,
  buttonCloseProps,
  buttonFullscreenProps,
  children,
  isFullscreen = DEFAULT_IS_FULL_SCREEN,
  minSize,
  onClose,
  open,
  position,
  size,
  style,
  title,
}: DialogComponentPropsType): React.ReactElement<DialogComponentPropsType> | null => {
  const { hasHorizontalScroll, hasVerticalScroll, setShouldClose, shouldClose } = DialogHook({
    open,
  });

  return (
    <Fragment>
      <GlobalStyle {...{ hasHorizontalScroll, hasVerticalScroll }} />
      <DialogOverlayComponent
        {...{
          animation: animation?.overlay,
          onClose,
          open,
          setShouldClose,
          shouldClose,
          style: style?.overlay,
        }}>
        <DialogContainerComponent
          {...{
            animation: animation?.container,
            buttonCloseProps,
            buttonFullscreenProps,
            isFullscreen,
            minSize,
            onClose,
            open,
            position,
            setShouldClose,
            size,
            style: style?.container,
            title,
          }}>
          {children}
        </DialogContainerComponent>
      </DialogOverlayComponent>
    </Fragment>
  );
};

export { DialogComponent };
