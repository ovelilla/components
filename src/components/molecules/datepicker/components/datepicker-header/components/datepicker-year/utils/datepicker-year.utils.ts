// Vendors
import { format } from 'date-fns';
// Types
import { GetYearUtilPropsType } from './types/get-year.util.props.type';

const getYear = ({ currentDate, locale }: GetYearUtilPropsType): string =>
  format(currentDate, 'yyyy', { locale });

export { getYear };
