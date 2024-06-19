// Vendors
import { getYear } from 'date-fns';
// Constants
import { TOTAL_MONTHS_IN_YEAR } from './constants/datepicker-monthpicker.hook.utils.constants';
// Types
import { GetMonthDatesPropsType } from './types/get-month-dates.util.props.type';

const getMonthDates = ({ currentDate }: GetMonthDatesPropsType): Date[] =>
  Array.from({ length: TOTAL_MONTHS_IN_YEAR }, (_, i) => new Date(getYear(currentDate), i));

export { getMonthDates };
