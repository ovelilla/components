// Vendors
import { DefaultTheme } from 'styled-components';
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
} from '../../enums/button.component.enums';

type ButtonComponentStyledPropsType = {
  alignment: ButtonComponentAlignmentEnum;
  borderRadius: ButtonComponentBorderRadiusEnum;
  disabled?: boolean;
  fontSize: ButtonComponentFontSizeEnum;
  fontWeight: ButtonComponentFontWeightEnum;
  fullWidth?: boolean;
  gap: ButtonComponentGapEnum;
  loading?: boolean;
  mode: ButtonComponentModeEnum;
  opacity?: ButtonComponentOpacityEnum;
  padding?: ButtonComponentPaddingEnum;
  shape: ButtonComponentShapeEnum;
  size: ButtonComponentSizeEnum;
  theme: DefaultTheme;
  variant: ButtonComponentVariantEnum;
};

export { ButtonComponentStyledPropsType };
