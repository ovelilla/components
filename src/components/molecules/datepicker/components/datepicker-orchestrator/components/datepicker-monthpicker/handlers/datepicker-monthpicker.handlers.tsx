// Vendors
import { getMonth, set } from 'date-fns';
// Constants
import { SCROLL_INTO_VIEW_OPTIONS } from './constants/datepicker-mothpicker.component.constants';
// Types
import { DatepickerMontpickerhHandlersPropsType } from './types/datepicker-monthpicker.handlers.props.type';
import { DatepickerMonthpickerHandlersReturnType } from './types/datepicker-monthpicker.handlers.return.type';
import { MonthButtonClickHandlerPropsType } from './types/month-button-click-handler.handlers.props.type';
import { ScrollToCurrentMonthHandlerPropsType } from './types/scroll-to-current-month-handler.handlers.props.type';

const monthButtonClickHandler = ({
  monthDate,
  setCurrentDate,
  setShowMonthpicker,
}: MonthButtonClickHandlerPropsType): void => {
  setCurrentDate((prevDate) => set(prevDate, { month: getMonth(monthDate) }));
  setShowMonthpicker(false);
};

const scrollToCurrentMonthHandler = ({
  currentDate,
  monthRefs,
}: ScrollToCurrentMonthHandlerPropsType): void => {
  monthRefs.current[getMonth(currentDate)].current?.scrollIntoView(SCROLL_INTO_VIEW_OPTIONS);
};

const DatepickerMonthpickerHandlers = ({
  currentDate,
  monthRefs,
  setCurrentDate,
  setShowMonthpicker,
}: DatepickerMontpickerhHandlersPropsType): DatepickerMonthpickerHandlersReturnType => {
  return {
    handleMonthButtonClick: (monthDate) =>
      monthButtonClickHandler({ monthDate, setCurrentDate, setShowMonthpicker }),
    handleScrollToCurrentMonth: () => scrollToCurrentMonthHandler({ currentDate, monthRefs }),
  };
};

export { DatepickerMonthpickerHandlers };
