// Vendors
import { useMediaQuery } from 'usehooks-ts';
// Constants
import { MEDIA_QUERY } from './constants/datepicker-year.hook.constants';
// Types
import { DatepickerYearHookPropsType } from './types/datepicker-year.hook.props.type';
import { DatepickerYearHookReturnType } from './types/datepicker-year.hook.return.type';
// Handlers
import { DatepickerYearHandlers } from '../handlers/datepicker-year.handlers';
// Utils
import { getYear } from '../utils/datepicker-year.utils';

const DatepickerYearHook = ({
  currentDate,
  locale,
  setCurrentDate,
  setShowYearpicker,
}: DatepickerYearHookPropsType): DatepickerYearHookReturnType => {
  const isMobile = useMediaQuery(MEDIA_QUERY);
  const year = getYear({ currentDate, locale });

  const {
    handleNextYearButtonClick,
    handlePrevYearButtonClick,
    handleToggleYearpickerButtonClick,
  } = DatepickerYearHandlers({
    setCurrentDate,
    setShowYearpicker,
  });

  return {
    handleNextYearButtonClick,
    handlePrevYearButtonClick,
    handleToggleYearpickerButtonClick,
    isMobile,
    year,
  };
};

export { DatepickerYearHook };
