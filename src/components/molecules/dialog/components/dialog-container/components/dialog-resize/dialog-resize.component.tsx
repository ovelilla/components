// Vendors
import React, { Fragment } from 'react';
// Hooks
import { DialogResizeHook } from './hooks/dialog-resize.hook';
// Styles
import {
  DialogResizeComponentBottomLeftCornerStyled,
  DialogResizeComponentBottomRightCornerStyled,
  DialogResizeComponentBottomSideStyled,
  DialogResizeComponentLeftSideStyled,
  DialogResizeComponentRightSideStyled,
  DialogResizeComponentTopLeftCornerStyled,
  DialogResizeComponentTopRigtCornerStyled,
  DialogResizeComponentTopSideStyled,
} from './styles/dialog-resize.component.styled';
// Types
import { DialogResizeComponentPropsType } from './types/dialog-resize.component.props.type';

const DialogResizeComponent = ({
  isFullscreen,
  minSize,
  setSize,
  setTranslate,
  size,
  translate,
}: DialogResizeComponentPropsType): React.ReactElement<DialogResizeComponentPropsType> => {
  const {
    handleBottomLeftCornerPointerDownEvent,
    handleBottomRightCornerPointerDownEvent,
    handleBottomSidePointerDownEvent,
    handleLeftSidePointerDownEvent,
    handleRightSidePointerDownEvent,
    handleTopLeftCornerPointerDownEvent,
    handleTopRightCornerPointerDownEvent,
    handleTopSidePointerDownEvent,
  } = DialogResizeHook({
    isFullscreen,
    minSize,
    setSize,
    setTranslate,
    size,
    translate,
  });
  return (
    <Fragment>
      <DialogResizeComponentTopRigtCornerStyled
        onPointerDown={handleTopRightCornerPointerDownEvent}
      />
      <DialogResizeComponentTopLeftCornerStyled
        onPointerDown={handleTopLeftCornerPointerDownEvent}
      />
      <DialogResizeComponentBottomRightCornerStyled
        onPointerDown={handleBottomRightCornerPointerDownEvent}
      />
      <DialogResizeComponentBottomLeftCornerStyled
        onPointerDown={handleBottomLeftCornerPointerDownEvent}
      />
      <DialogResizeComponentTopSideStyled onPointerDown={handleTopSidePointerDownEvent} />
      <DialogResizeComponentRightSideStyled onPointerDown={handleRightSidePointerDownEvent} />
      <DialogResizeComponentBottomSideStyled onPointerDown={handleBottomSidePointerDownEvent} />
      <DialogResizeComponentLeftSideStyled onPointerDown={handleLeftSidePointerDownEvent} />
    </Fragment>
  );
};

export { DialogResizeComponent };
