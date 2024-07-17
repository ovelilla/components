// Vendors
import React from 'react';
// Enums
import {
  DialogContentComponentBorderRadiusEnum,
  DialogContentComponentPaddingEnum,
} from './enums/dialog-content.component.enums';
// Styles
import { DialogContentComponentStyled } from './styles/dialog-content.component.styled';
// Types
import { DialogContentComponentPropsType } from './types/dialog-content.component.props.type';

const DialogContentComponent = ({
  borderRadius = DialogContentComponentBorderRadiusEnum.MEDIUM,
  children,
  isFullScreen,
  padding = DialogContentComponentPaddingEnum.NONE,
}: DialogContentComponentPropsType): React.ReactElement<DialogContentComponentPropsType> => (
  <DialogContentComponentStyled {...{ borderRadius, isFullScreen, padding }}>
    {children}
  </DialogContentComponentStyled>
);

export { DialogContentComponent };
