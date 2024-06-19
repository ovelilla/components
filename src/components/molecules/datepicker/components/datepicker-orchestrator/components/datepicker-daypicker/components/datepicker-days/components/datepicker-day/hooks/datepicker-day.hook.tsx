// Handlers
import { DatepickerDayHandlers } from '../handlers/datepicker-day.handlers';
// Types
import { DatepickerDayHookPropsType } from './types/datepicker-day.hook.props.type';
import { DatepickerDayHookReturnType } from './types/datepicker-day.hook.return.type';
// Utils
import { getDay, getState } from '../utils/datepicker-day.utils';

const DatepickerDayHook = ({
  currentDate,
  date,
  locale,
  selectedDate,
  setCurrentDate,
  setSelectedDate,
}: DatepickerDayHookPropsType): DatepickerDayHookReturnType => {
  const day = getDay({ date, locale });
  const state = getState({ currentDate, date, selectedDate });

  const { handleSelectDate } = DatepickerDayHandlers({
    setCurrentDate,
    setSelectedDate,
  });

  return {
    day,
    handleSelectDate,
    state,
  };
};

export { DatepickerDayHook };
