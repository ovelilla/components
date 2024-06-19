// Vendors
import { differenceInYears, format, set } from 'date-fns';
// Constants
import { FORMAT_STRING } from './constants/datepicker-yearpicker.utils.constants';
// Types
import { GetYearsRangeIndexPropsType } from './types/get-years-range-index.util.props.type';
import { GetYearStringPropsType } from './types/get-year-string.util.props.type';

const getYearsRangeIndex = ({ date, range }: GetYearsRangeIndexPropsType): number =>
  differenceInYears(date, set(date, { year: range.start }));

const getYearString = ({ locale, yearDate }: GetYearStringPropsType): string =>
  format(yearDate, FORMAT_STRING, { locale });

export { getYearsRangeIndex, getYearString };
