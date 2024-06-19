// Enums
import {
  ButtonComponentOpacityEnum,
  ButtonComponentPaddingEnum,
  ButtonComponentShapeEnum,
  ButtonComponentSizeEnum,
  ButtonComponentVariantEnum,
} from 'components/atoms/button/enums/button.component.enums';

type GetButtonConfigurationReturnType = {
  fullWidth: boolean;
  onClick: VoidFunction;
  opacity: ButtonComponentOpacityEnum;
  padding: ButtonComponentPaddingEnum;
  shape: ButtonComponentShapeEnum;
  size: ButtonComponentSizeEnum;
  type: string;
  variant: ButtonComponentVariantEnum;
};

export { GetButtonConfigurationReturnType };
