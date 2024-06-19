// Vendors
import { getMonth, getYear, set } from 'date-fns';
// Types
import { DatepickerDayHandlersPropsType } from './types/datepicker-day.handlers.props.type';
import { DatepickerDayHandlersReturnType } from './types/datepicker-day.handlers.return.type';
import { SelectDateHandlerPropsType } from './types/select-date-handler.handlers.props.type';

const selectDateHandler = ({
  date,
  setCurrentDate,
  setSelectedDate,
}: SelectDateHandlerPropsType): void => {
  setSelectedDate(date);
  setCurrentDate((prevDate) => set(prevDate, { year: getYear(date), month: getMonth(date) }));
};

const DatepickerDayHandlers = ({
  setCurrentDate,
  setSelectedDate,
}: DatepickerDayHandlersPropsType): DatepickerDayHandlersReturnType => {
  return {
    handleSelectDate: (date: Date) => selectDateHandler({ date, setCurrentDate, setSelectedDate }),
  };
};

export { DatepickerDayHandlers };
