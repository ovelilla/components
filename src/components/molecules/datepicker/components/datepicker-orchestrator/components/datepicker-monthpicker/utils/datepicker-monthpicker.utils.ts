// Vendors
import { format } from 'date-fns';
// Constants
import { FORMAT_STRING } from './constants/datepicker-monthpicker.utils.constants';
// Types
import { GetMonthStringPropsType } from './types/get-month-name.util.props.type';

const getMonthString = ({ locale, monthDate }: GetMonthStringPropsType): string =>
  format(monthDate, FORMAT_STRING, { locale });

export { getMonthString };
