// Vendors
import { getYear, set } from 'date-fns';
// Types
import { DatepickerYearHandlersPropsType } from './types/datepicker-year.handlers.props.type';
import { DatepickerYearHandlersReturnType } from './types/datepicker-year.handlers.return.type';
import { NextYearButtonClickHandlerPropsType } from './types/next-year-button-click-handler.handlers.props.type';
import { PrevYearButtonClickHandlerPropsType } from './types/prev-year-button-click-handler.handlers.props.type';
import { ToggleYearpickerButtonClickHandlerPropsType } from './types/toggle-yearpicker-button-click-handler.handlers.props.type';

const nextYearButtonClickHandler = ({
  setCurrentDate,
}: NextYearButtonClickHandlerPropsType): void => {
  setCurrentDate((prevDate) => set(prevDate, { year: getYear(prevDate) + 1 }));
};

const prevYearButtonClickHandler = ({
  setCurrentDate,
}: PrevYearButtonClickHandlerPropsType): void => {
  setCurrentDate((prevDate) => set(prevDate, { year: getYear(prevDate) - 1 }));
};

const toggleYearpickerButtonClickHandler = ({
  setShowYearpicker,
}: ToggleYearpickerButtonClickHandlerPropsType): void => {
  setShowYearpicker((prevShowYearpicker) => !prevShowYearpicker);
};

const DatepickerYearHandlers = ({
  setCurrentDate,
  setShowYearpicker,
}: DatepickerYearHandlersPropsType): DatepickerYearHandlersReturnType => {
  return {
    handleNextYearButtonClick: () => nextYearButtonClickHandler({ setCurrentDate }),
    handlePrevYearButtonClick: () => prevYearButtonClickHandler({ setCurrentDate }),
    handleToggleYearpickerButtonClick: () =>
      toggleYearpickerButtonClickHandler({ setShowYearpicker }),
  };
};

export { DatepickerYearHandlers };
