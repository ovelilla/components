// Vendors
import { addDays, eachDayOfInterval, endOfWeek, isEqual, startOfWeek, subWeeks } from 'date-fns';
// Types
import { GetDaysPropsType } from './types/get-days.props.type';

const getDates = ({ currentDate, locale }: GetDaysPropsType): Date[] => {
  const initailStart = startOfWeek(currentDate, { locale });
  const start = isEqual(initailStart, currentDate) ? subWeeks(initailStart, 1) : initailStart;
  const end = endOfWeek(addDays(start, 41), { locale });
  const dates = eachDayOfInterval({ start, end });
  return dates;
};

export { getDates };
