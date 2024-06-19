// Vendors
import { eachDayOfInterval, endOfWeek, format, startOfWeek } from 'date-fns';
// Types
import { GetWeekdaysPropsType } from './types/get-weekdays.props.type';

const getWeekdays = ({ locale }: GetWeekdaysPropsType): string[] => {
  const today = new Date();
  const start = startOfWeek(today, { locale });
  const end = endOfWeek(today, { locale });
  const days = eachDayOfInterval({ start, end });
  return days.map((day) => format(day, 'EEEEE', { locale }).toUpperCase());
};

export { getWeekdays };
