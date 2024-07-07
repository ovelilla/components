// Vendors
import { AnimatePresence } from 'framer-motion';
import React, { Fragment } from 'react';
// Components
import { DialogContentComponent } from './components/dialog-content/dialog-content.component';
import { DialogOverlayComponent } from './components/dialog-overlay/dialog-overlay.component';
// Constants
import {
  DEFAULT_ANIMATION_DURATION,
  DEFAULT_HAS_ANIMATION,
  DEFAULT_MAX_WIDTH,
  DEFAULT_SHOW_CLOSE_BUTTON,
  DEFAULT_SHOW_FULL_SCREEN_BUTTON,
  DEFAULT_SHOW_TOOLTIPS,
} from './constants/dialog.component.constants';
// Enums
import {
  DialogContentComponentBorderRadiusEnum,
  DialogContentComponentPaddingEnum,
} from './components/dialog-content/enums/dialog-content.component.enums';
// Hooks
import { DialogHook } from './hooks/dialog.hook';
// Styles
import { GlobalStyle } from './styles/dialog.component.styled';
// Types
import { DialogComponentPropsType } from './types/dialog.component.props.type';

const DialogComponent = ({
  animationDuration = DEFAULT_ANIMATION_DURATION,
  children,
  contentBorderRadius = DialogContentComponentBorderRadiusEnum.MEDIUM,
  contentPadding = DialogContentComponentPaddingEnum.NONE,
  hasAnimation = DEFAULT_HAS_ANIMATION,
  maxWidth = DEFAULT_MAX_WIDTH,
  onClose,
  open,
  showCloseButton = DEFAULT_SHOW_CLOSE_BUTTON,
  showFullScreenButton = DEFAULT_SHOW_FULL_SCREEN_BUTTON,
  showTooltips = DEFAULT_SHOW_TOOLTIPS,
  title,
}: DialogComponentPropsType): React.ReactElement<DialogComponentPropsType> | null => {
  const { hasHorizontalScroll, hasVerticalScroll, overlayRef, setShouldClose, shouldClose } =
    DialogHook({ open });

  return (
    <AnimatePresence>
      {open && (
        <Fragment>
          <DialogOverlayComponent
            {...{
              animationDuration,
              hasAnimation,
              onClose,
              open,
              overlayRef,
              setShouldClose,
              shouldClose,
            }}>
            <DialogContentComponent
              {...{
                animationDuration,
                borderRadius: contentBorderRadius,
                hasAnimation,
                maxWidth,
                onClose,
                padding: contentPadding,
                setShouldClose,
                showCloseButton,
                showFullScreenButton,
                showTooltips,
                title,
              }}>
              {children}
            </DialogContentComponent>
          </DialogOverlayComponent>
          <GlobalStyle {...{ hasHorizontalScroll, hasVerticalScroll }} />
        </Fragment>
      )}
    </AnimatePresence>
  );
};

export { DialogComponent };
