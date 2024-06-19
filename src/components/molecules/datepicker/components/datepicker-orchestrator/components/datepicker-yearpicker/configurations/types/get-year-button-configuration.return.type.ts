import {
  ButtonComponentAlignmentEnum,
  ButtonComponentBorderRadiusEnum,
  ButtonComponentSizeEnum,
  ButtonComponentVariantEnum,
} from 'components/atoms/button/enums/button.component.enums';

type GetYearButtonConfigurationReturnType = {
  alignment: ButtonComponentAlignmentEnum;
  borderRadius: ButtonComponentBorderRadiusEnum;
  fullWidth: boolean;
  onClick: VoidFunction;
  ref: React.RefObject<HTMLButtonElement>;
  size: ButtonComponentSizeEnum;
  type: string;
  variant: ButtonComponentVariantEnum;
};

export { GetYearButtonConfigurationReturnType };
