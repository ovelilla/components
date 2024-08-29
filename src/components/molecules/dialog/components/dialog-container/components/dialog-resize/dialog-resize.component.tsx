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
  disabled,
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
    disabled,
    minSize,
    setSize,
    setTranslate,
    size,
    translate,
  });
  return (
    <Fragment>
      <DialogResizeComponentTopRigtCornerStyled
        {...{ disabled, onPointerDown: handleTopRightCornerPointerDownEvent }}
      />
      <DialogResizeComponentTopLeftCornerStyled
        {...{ disabled, onPointerDown: handleTopLeftCornerPointerDownEvent }}
      />
      <DialogResizeComponentBottomRightCornerStyled
        {...{ disabled, onPointerDown: handleBottomRightCornerPointerDownEvent }}
      />
      <DialogResizeComponentBottomLeftCornerStyled
        {...{ disabled, onPointerDown: handleBottomLeftCornerPointerDownEvent }}
      />
      <DialogResizeComponentTopSideStyled
        {...{ disabled, onPointerDown: handleTopSidePointerDownEvent }}
      />
      <DialogResizeComponentRightSideStyled
        {...{ disabled, onPointerDown: handleRightSidePointerDownEvent }}
      />
      <DialogResizeComponentBottomSideStyled
        {...{ disabled, onPointerDown: handleBottomSidePointerDownEvent }}
      />
      <DialogResizeComponentLeftSideStyled
        {...{ disabled, onPointerDown: handleLeftSidePointerDownEvent }}
      />
    </Fragment>
  );
};

export { DialogResizeComponent };
