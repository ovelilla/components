// Types
import { DatepickerWeekdaysHookPropsType } from './types/datepicker-weekdays.hook.props.type';
import { DatepickerWeekdaysHookReturnType } from './types/datepicker-weekdays.hook.return.type';
// Utils
import { getWeekdays } from '../utils/datepicker-weekdays.utils';

const DatepickerWeekdaysHook = ({
  locale,
}: DatepickerWeekdaysHookPropsType): DatepickerWeekdaysHookReturnType => {
  const weekdays = getWeekdays({ locale });

  return { weekdays };
};

export { DatepickerWeekdaysHook };
