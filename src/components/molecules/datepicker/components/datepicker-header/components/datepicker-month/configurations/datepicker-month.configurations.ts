// Constants
import {
  CURRENT_MONTH_BUTTON_PROPS,
  NEXT_MONTH_BUTTON_PROPS,
  PREV_MONTH_BUTTON_PROPS,
} from '../constants/datepicker-month.component.constants';
// Enums
import {
  ButtonComponentFontSizeEnum,
  ButtonComponentGapEnum,
  ButtonComponentPaddingEnum,
  ButtonComponentVariantEnum,
} from 'components/atoms/button/enums/button.component.enums';
// Types
import { GetCurrentMonthButtonConfigurationPropsType } from './types/get-current-month-button-configuration.props.type';
import { GetCurrentMonthButtonConfigurationReturnType } from './types/get-current-month-button-configuration.return.type';
import { GetNextButtonConfigurationPropsType } from './types/get-next-button-configuration.props.type';
import { GetNextButtonConfigurationReturnType } from './types/get-next-button-configuration.return.type';
import { GetPrevButtonConfigurationPropsType } from './types/get-prev-button-configuration.props.type';
import { GetPrevButtonConfigurationReturnType } from './types/get-prev-button-configuration.return.type';

const getCurrentMonthButtonConfiguration = ({
  handleToggleMonthpickerButtonClick,
  isMobile,
  showYearpicker,
}: GetCurrentMonthButtonConfigurationPropsType): GetCurrentMonthButtonConfigurationReturnType => ({
  ...CURRENT_MONTH_BUTTON_PROPS,
  disabled: showYearpicker,
  fontSize: isMobile ? ButtonComponentFontSizeEnum.SMALL : ButtonComponentFontSizeEnum.MEDIUM,
  gap: isMobile ? ButtonComponentGapEnum.SMALL : ButtonComponentGapEnum.MEDIUM,
  onClick: handleToggleMonthpickerButtonClick,
  padding: isMobile ? ButtonComponentPaddingEnum.SMALL : ButtonComponentPaddingEnum.MEDIUM,
});

const getNextButtonConfiguration = ({
  handleNextMonthButtonClick,
  showMonthpicker,
  showYearpicker,
}: GetNextButtonConfigurationPropsType): GetNextButtonConfigurationReturnType => ({
  ...NEXT_MONTH_BUTTON_PROPS,
  onClick: handleNextMonthButtonClick,
  variant:
    showMonthpicker || showYearpicker
      ? ButtonComponentVariantEnum.INVISIBLE
      : ButtonComponentVariantEnum.GHOST,
});

const getPrevButtonConfiguration = ({
  handlePrevMonthButtonClick,
  showMonthpicker,
  showYearpicker,
}: GetPrevButtonConfigurationPropsType): GetPrevButtonConfigurationReturnType => ({
  ...PREV_MONTH_BUTTON_PROPS,
  onClick: handlePrevMonthButtonClick,
  variant:
    showMonthpicker || showYearpicker
      ? ButtonComponentVariantEnum.INVISIBLE
      : ButtonComponentVariantEnum.GHOST,
});

export {
  getCurrentMonthButtonConfiguration,
  getNextButtonConfiguration,
  getPrevButtonConfiguration,
};
