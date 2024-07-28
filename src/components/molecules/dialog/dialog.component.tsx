// Vendors
import { AnimatePresence } from 'framer-motion';
import React, { Fragment } from 'react';
// Components
import { DialogContainerComponent } from './components/dialog-container/dialog-container.component';
import { DialogOverlayComponent } from './components/dialog-overlay/dialog-overlay.component';
// Constants
import {
  DEFAULT_ANIMATION_DURATION,
  DEFAULT_HAS_ANIMATION,
  DEFAULT_IS_FULL_SCREEN,
} from './constants/dialog.component.constants';
// Hooks
import { DialogHook } from './hooks/dialog.hook';
// Styles
import { GlobalStyle } from './styles/dialog.component.styled';
// Types
import { DialogComponentPropsType } from './types/dialog.component.props.type';

const DialogComponent = ({
  animationDuration = DEFAULT_ANIMATION_DURATION,
  children,
  closeButtonProps,
  contentProps,
  fullScreenButtonProps,
  hasAnimation = DEFAULT_HAS_ANIMATION,
  isFullscreen = DEFAULT_IS_FULL_SCREEN,
  onClose,
  open,
  overlayProps,
  size,
  title,
}: DialogComponentPropsType): React.ReactElement<DialogComponentPropsType> | null => {
  const { hasHorizontalScroll, hasVerticalScroll, overlayRef, setShouldClose, shouldClose } =
    DialogHook({ open });

  return (
    <AnimatePresence>
      {open && (
        <Fragment>
          <GlobalStyle {...{ hasHorizontalScroll, hasVerticalScroll }} />
          <DialogOverlayComponent
            {...{
              ...overlayProps,
              animationDuration,
              hasAnimation,
              onClose,
              open,
              overlayRef,
              setShouldClose,
              shouldClose,
            }}>
            <DialogContainerComponent
              {...{
                animationDuration,
                closeButtonProps,
                contentProps,
                fullScreenButtonProps,
                hasAnimation,
                isFullscreen,
                onClose,
                setShouldClose,
                size,
                title,
              }}>
              {children}
            </DialogContainerComponent>
          </DialogOverlayComponent>
        </Fragment>
      )}
    </AnimatePresence>
  );
};

export { DialogComponent };
