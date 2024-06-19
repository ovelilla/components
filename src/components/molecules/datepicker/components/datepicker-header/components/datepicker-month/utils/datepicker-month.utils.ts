// Vendors
import { format } from 'date-fns';
// Types
import { GetMonthUtilPropsType } from './types/get-month.util.props.type';

const getMonth = ({ currentDate, locale }: GetMonthUtilPropsType): string =>
  format(currentDate, 'MMM', { locale });

export { getMonth };
