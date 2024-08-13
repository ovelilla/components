// Vendors
import React from 'react';
// Styles
import {
  DialogResizeComponentBottomLeftCornerStyled,
  DialogResizeComponentBottomRightCornerStyled,
  DialogResizeComponentBottomSideStyled,
  DialogResizeComponentLeftSideStyled,
  DialogResizeComponentRightSideStyled,
  DialogResizeComponentStyled,
  DialogResizeComponentTopLeftCornerStyled,
  DialogResizeComponentTopRigtCornerStyled,
  DialogResizeComponentTopSideStyled,
} from './styles/dialog-resize.component.styled';
// Types
import { DialogResizeComponentPropsType } from './types/dialog-resize.component.props.type';

const DialogResizeComponent = ({
  isFullscreen,
  setPosition,
  setSize,
}: DialogResizeComponentPropsType): React.ReactElement<DialogResizeComponentPropsType> => (
  <DialogResizeComponentStyled>
    <DialogResizeComponentTopRigtCornerStyled />
    <DialogResizeComponentTopLeftCornerStyled />
    <DialogResizeComponentBottomRightCornerStyled />
    <DialogResizeComponentBottomLeftCornerStyled />
    <DialogResizeComponentTopSideStyled />
    <DialogResizeComponentRightSideStyled />
    <DialogResizeComponentBottomSideStyled />
    <DialogResizeComponentLeftSideStyled />
  </DialogResizeComponentStyled>
);

export { DialogResizeComponent };
