// Vendors
import React from 'react';
// Enumerations
import {
  ButtonComponentBorderRadiusEnumeration,
  ButtonComponentSizesEnumeration,
  ButtonComponentTypesEnumeration,
  ButtonComponentVariantsEnumeration,
} from './enumerations/button.component.enumerations';
// Styles
import { ButtonComponentStyled } from './button.component.styled';
// Types
import { ButtonComponentPropsType } from './types/button.component.props.type';

const ButtonComponent = ({
  borderRadius = ButtonComponentBorderRadiusEnumeration.FULL,
  buttonType = ButtonComponentTypesEnumeration.BUTTON,
  children,
  disabled,
  loading,
  onClick,
  size = ButtonComponentSizesEnumeration.MEDIUM,
  variant = ButtonComponentVariantsEnumeration.PRIMARY,
  ...props
}: ButtonComponentPropsType): React.ReactElement<ButtonComponentPropsType> => {
  return (
    <ButtonComponentStyled
      {...{
        borderRadius,
        disabled,
        loading,
        onClick,
        size,
        buttonType,
        variant,
        ...props,
      }}>
      {children}
    </ButtonComponentStyled>
  );
};

export { ButtonComponent };
