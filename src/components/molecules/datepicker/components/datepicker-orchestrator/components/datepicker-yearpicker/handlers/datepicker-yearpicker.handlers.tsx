// Vendors
import { getYear, set } from 'date-fns';
// Constants
import { SCROLL_INTO_VIEW_OPTIONS } from './constants/datepicker-yearpicker.component.constants';
// Types
import { DatepickerMontpickerhHandlersPropsType } from './types/datepicker-yearpicker.handlers.props.type';
import { DatepickerYearpickerHandlersReturnType } from './types/datepicker-yearpicker.handlers.return.type';
import { YearButtonClickHandlerPropsType } from './types/year-button-click-handler.handlers.props.type';
import { ScrollToCurrentYearHandlerPropsType } from './types/scroll-to-current-year-handler.handlers.props.type';
// Utils
import { getYearsRangeIndex } from '../utils/datepicker-yearpicker.utils';

const yearButtonClickHandler = ({
  yearDate,
  setCurrentDate,
  setShowYearpicker,
}: YearButtonClickHandlerPropsType): void => {
  setCurrentDate((prevDate) => set(prevDate, { year: getYear(yearDate) }));
  setShowYearpicker(false);
};

const scrollToCurrentYearHandler = ({
  currentDate,
  yearRefs,
  yearsRange,
}: ScrollToCurrentYearHandlerPropsType): void => {
  yearRefs.current[
    getYearsRangeIndex({ date: currentDate, range: yearsRange })
  ].current?.scrollIntoView(SCROLL_INTO_VIEW_OPTIONS);
};

const DatepickerYearpickerHandlers = ({
  currentDate,
  setCurrentDate,
  setShowYearpicker,
  yearRefs,
  yearsRange,
}: DatepickerMontpickerhHandlersPropsType): DatepickerYearpickerHandlersReturnType => {
  return {
    handleYearButtonClick: (yearDate) =>
      yearButtonClickHandler({ yearDate, setCurrentDate, setShowYearpicker }),
    handleScrollToCurrentYear: () =>
      scrollToCurrentYearHandler({ currentDate, yearRefs, yearsRange }),
  };
};

export { DatepickerYearpickerHandlers };
