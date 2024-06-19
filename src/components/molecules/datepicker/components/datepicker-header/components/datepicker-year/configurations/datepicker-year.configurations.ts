import {
  CURRENT_YEAR_BUTTON_PROPS,
  NEXT_YEAR_BUTTON_PROPS,
  PREV_YEAR_BUTTON_PROPS,
} from '../constants/datepicker-year.component.constants';
// Enums
import {
  ButtonComponentFontSizeEnum,
  ButtonComponentGapEnum,
  ButtonComponentPaddingEnum,
  ButtonComponentVariantEnum,
} from 'components/atoms/button/enums/button.component.enums';
// Types
import { GetCurrentYearButtonConfigurationPropsType } from './types/get-current-year-button-configuration.props.type';
import { GetCurrentYearButtonConfigurationReturnType } from './types/get-current-year-button-configuration.return.type';
import { GetNextButtonConfigurationPropsType } from './types/get-next-button-configuration.props.type';
import { GetNextButtonConfigurationReturnType } from './types/get-next-button-configuration.return.type';
import { GetPrevButtonConfigurationPropsType } from './types/get-prev-button-configuration.props.type';
import { GetPrevButtonConfigurationReturnType } from './types/get-prev-button-configuration.return.type';

const getCurrentYearButtonConfiguration = ({
  handleToggleYearpickerButtonClick,
  isMobile,
  showMonthpicker,
}: GetCurrentYearButtonConfigurationPropsType): GetCurrentYearButtonConfigurationReturnType => ({
  ...CURRENT_YEAR_BUTTON_PROPS,
  disabled: showMonthpicker,
  fontSize: isMobile ? ButtonComponentFontSizeEnum.SMALL : ButtonComponentFontSizeEnum.MEDIUM,
  gap: isMobile ? ButtonComponentGapEnum.SMALL : ButtonComponentGapEnum.MEDIUM,
  onClick: handleToggleYearpickerButtonClick,
  padding: isMobile ? ButtonComponentPaddingEnum.SMALL : ButtonComponentPaddingEnum.MEDIUM,
});

const getNextButtonConfiguration = ({
  handleNextYearButtonClick,
  showMonthpicker,
  showYearpicker,
}: GetNextButtonConfigurationPropsType): GetNextButtonConfigurationReturnType => ({
  ...NEXT_YEAR_BUTTON_PROPS,
  onClick: handleNextYearButtonClick,
  variant:
    showMonthpicker || showYearpicker
      ? ButtonComponentVariantEnum.INVISIBLE
      : ButtonComponentVariantEnum.GHOST,
});

const getPrevButtonConfiguration = ({
  handlePrevYearButtonClick,
  showMonthpicker,
  showYearpicker,
}: GetPrevButtonConfigurationPropsType): GetPrevButtonConfigurationReturnType => ({
  ...PREV_YEAR_BUTTON_PROPS,
  onClick: handlePrevYearButtonClick,
  variant:
    showMonthpicker || showYearpicker
      ? ButtonComponentVariantEnum.INVISIBLE
      : ButtonComponentVariantEnum.GHOST,
});

export {
  getCurrentYearButtonConfiguration,
  getNextButtonConfiguration,
  getPrevButtonConfiguration,
};
