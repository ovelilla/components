// Vendors
import React from 'react';
// Enums
import {
  ButtonComponentAlignmentEnum,
  ButtonComponentBorderRadiusEnum,
  ButtonComponentFontSizeEnum,
  ButtonComponentFontWeightEnum,
  ButtonComponentGapEnum,
  ButtonComponentModeEnum,
  ButtonComponentOpacityEnum,
  ButtonComponentPaddingEnum,
  ButtonComponentShapeEnum,
  ButtonComponentSizeEnum,
  ButtonComponentVariantEnum,
} from '../enums/button.component.enums';

type ButtonComponentPropsType = {
  alignment?: ButtonComponentAlignmentEnum;
  borderRadius?: ButtonComponentBorderRadiusEnum;
  children?: React.ReactNode;
  disabled?: boolean;
  fontSize?: ButtonComponentFontSizeEnum;
  fontWeight?: ButtonComponentFontWeightEnum;
  fullWidth?: boolean;
  gap?: ButtonComponentGapEnum;
  href?: string;
  loading?: boolean;
  mode?: ButtonComponentModeEnum;
  onClick?: VoidFunction;
  opacity?: ButtonComponentOpacityEnum;
  padding?: ButtonComponentPaddingEnum;
  shape?: ButtonComponentShapeEnum;
  show?: boolean;
  size?: ButtonComponentSizeEnum;
  variant?: ButtonComponentVariantEnum;
};

export { ButtonComponentPropsType };
