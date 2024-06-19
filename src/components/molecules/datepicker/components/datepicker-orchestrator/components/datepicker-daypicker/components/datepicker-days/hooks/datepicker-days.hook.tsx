// Types
import { DatepickerDaysHookPropsType } from './types/datepicker-days.hook.props.type';
import { DatepickerDaysHookReturnType } from './types/datepicker-days.hook.return.type';
// Utils
import { getDates } from '../utils/datepicker-days.utils';

const DatepickerDaysHook = ({
  currentDate,
  locale,
}: DatepickerDaysHookPropsType): DatepickerDaysHookReturnType => {
  const dates = getDates({ currentDate, locale });

  return {
    dates,
  };
};

export { DatepickerDaysHook };
