// Vendors
import { getMonth, isSameMonth } from 'date-fns';
// Constants
import { BUTTON_PROPS } from '../constants/datepicker-mothpicker.component.constants';
// Enums
import { ButtonComponentVariantEnum } from 'components/atoms/button/enums/button.component.enums';
// Types
import { GetMonthButtonConfigurationPropsType } from './types/get-month-button-configuration.props.type';
import { GetMonthButtonConfigurationReturnType } from './types/get-month-button-configuration.return.type';

const getMonthButtonConfiguration = ({
  currentDate,
  handleMonthButtonClick,
  monthDate,
  monthRefs,
}: GetMonthButtonConfigurationPropsType): GetMonthButtonConfigurationReturnType => ({
  ...BUTTON_PROPS,
  onClick: () => handleMonthButtonClick(monthDate),
  ref: monthRefs.current[getMonth(monthDate)],
  variant: isSameMonth(currentDate, monthDate)
    ? ButtonComponentVariantEnum.SECONDARY
    : ButtonComponentVariantEnum.GHOST,
});

export { getMonthButtonConfiguration };
