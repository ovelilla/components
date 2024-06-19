// Enums
import {
  ButtonComponentShapeEnum,
  ButtonComponentVariantEnum,
} from 'components/atoms/button/enums/button.component.enums';

type GetNextButtonConfigurationReturnType = {
  onClick: VoidFunction;
  shape: ButtonComponentShapeEnum;
  type: string;
  variant: ButtonComponentVariantEnum;
};

export { GetNextButtonConfigurationReturnType };
