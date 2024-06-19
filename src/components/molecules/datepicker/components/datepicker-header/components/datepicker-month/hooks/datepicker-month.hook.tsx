// Vendors
import { useMediaQuery } from 'usehooks-ts';
// Constants
import { MEDIA_QUERY } from './constants/datepicker-month.hook.constants';
// Handlers
import { DatepickerMonthHandlers } from '../handlers/datepicker-month.handlers';
// Types
import { DatepickerMonthHookPropsType } from './types/datepicker-month.hook.props.type';
import { DatepickerMonthHookReturnType } from './types/datepicker-month.hook.return.type';
// Utils
import { getMonth } from '../utils/datepicker-month.utils';

const DatepickerMonthHook = ({
  currentDate,
  locale,
  setCurrentDate,
  setShowMonthpicker,
}: DatepickerMonthHookPropsType): DatepickerMonthHookReturnType => {
  const isMobile = useMediaQuery(MEDIA_QUERY);
  const month = getMonth({ currentDate, locale });
  console.log('isMobile', isMobile);
  const {
    handleNextMonthButtonClick,
    handlePrevMonthButtonClick,
    handleToggleMonthpickerButtonClick,
  } = DatepickerMonthHandlers({
    setCurrentDate,
    setShowMonthpicker,
  });

  return {
    handleNextMonthButtonClick,
    handlePrevMonthButtonClick,
    handleToggleMonthpickerButtonClick,
    isMobile,
    month,
  };
};

export { DatepickerMonthHook };
