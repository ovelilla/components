// Enums
import {
  ButtonComponentShapeEnum,
  ButtonComponentVariantEnum,
} from 'components/atoms/button/enums/button.component.enums';

type GetPrevButtonConfigurationReturnType = {
  onClick: VoidFunction;
  shape: ButtonComponentShapeEnum;
  type: string;
  variant: ButtonComponentVariantEnum;
};

export { GetPrevButtonConfigurationReturnType };
