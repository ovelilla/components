// Enums
import {
  ButtonComponentFontSizeEnum,
  ButtonComponentGapEnum,
  ButtonComponentPaddingEnum,
  ButtonComponentVariantEnum,
} from 'components/atoms/button/enums/button.component.enums';

type GetCurrentYearButtonConfigurationReturnType = {
  disabled: boolean;
  fontSize: ButtonComponentFontSizeEnum;
  gap: ButtonComponentGapEnum;
  onClick: VoidFunction;
  padding: ButtonComponentPaddingEnum;
  type: string;
  variant: ButtonComponentVariantEnum;
};

export { GetCurrentYearButtonConfigurationReturnType };
