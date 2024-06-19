import {
  ButtonComponentAlignmentEnum,
  ButtonComponentBorderRadiusEnum,
  ButtonComponentSizeEnum,
  ButtonComponentVariantEnum,
} from 'components/atoms/button/enums/button.component.enums';

type GetMonthButtonConfigurationReturnType = {
  alignment: ButtonComponentAlignmentEnum;
  borderRadius: ButtonComponentBorderRadiusEnum;
  fullWidth: boolean;
  onClick: VoidFunction;
  ref: React.RefObject<HTMLButtonElement>;
  size: ButtonComponentSizeEnum;
  type: string;
  variant: ButtonComponentVariantEnum;
};

export { GetMonthButtonConfigurationReturnType };
