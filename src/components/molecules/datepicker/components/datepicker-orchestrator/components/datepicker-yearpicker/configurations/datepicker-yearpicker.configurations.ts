// Vendors
import { isSameYear } from 'date-fns';
// Constants
import { BUTTON_PROPS } from '../constants/datepicker-yearpicker.component.constants';
// Enums
import { ButtonComponentVariantEnum } from 'components/atoms/button/enums/button.component.enums';
// Types
import { GetYearButtonConfigurationPropsType } from './types/get-year-button-configuration.props.type';
import { GetYearButtonConfigurationReturnType } from './types/get-year-button-configuration.return.type';
// Utils
import { getYearsRangeIndex } from '../utils/datepicker-yearpicker.utils';

const getYearButtonConfiguration = ({
  currentDate,
  handleYearButtonClick,
  yearDate,
  yearsRange,
  yearRefs,
}: GetYearButtonConfigurationPropsType): GetYearButtonConfigurationReturnType => ({
  ...BUTTON_PROPS,
  onClick: () => handleYearButtonClick(yearDate),
  ref: yearRefs.current[getYearsRangeIndex({ date: yearDate, range: yearsRange })],
  variant: isSameYear(currentDate, yearDate)
    ? ButtonComponentVariantEnum.SECONDARY
    : ButtonComponentVariantEnum.GHOST,
});

export { getYearButtonConfiguration };
