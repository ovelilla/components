// Vendors
import React from 'react';
// Enumerations
import {
  ButtonComponentBorderRadiusEnumeration,
  ButtonComponentSizesEnumeration,
  ButtonComponentTypesEnumeration,
  ButtonComponentVariantsEnumeration,
} from '../enumerations/button.component.enumerations';

type ButtonComponentPropsType = {
  borderRadius?: ButtonComponentBorderRadiusEnumeration;
  buttonType?: ButtonComponentTypesEnumeration;
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick?: VoidFunction;
  size?: ButtonComponentSizesEnumeration;
  variant?: ButtonComponentVariantsEnumeration;
};

export { ButtonComponentPropsType };
