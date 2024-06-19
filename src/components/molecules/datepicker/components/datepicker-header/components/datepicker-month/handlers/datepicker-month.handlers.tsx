// Vendors
import { getMonth, set } from 'date-fns';
// Types
import { DatepickerMonthHandlersPropsType } from './types/datepicker-month.handlers.props.type';
import { DatepickerMonthHandlersReturnType } from './types/datepicker-month.handlers.return.type';
import { NextMonthButtonClickHandlerPropsType } from './types/next-month-button-click-handler.handlers.props.type';
import { PrevMonthButtonClickHandlerPropsType } from './types/prev-month-button-click-handler.handlers.props.type';
import { ToggleMonthpickerButtonClickHandlerPropsType } from './types/toggle-monthpicker-button-click-handler.handlers.props.type';

const nextMonthButtonClickHandler = ({
  setCurrentDate,
}: NextMonthButtonClickHandlerPropsType): void => {
  setCurrentDate((prevDate) => set(prevDate, { month: getMonth(prevDate) + 1 }));
};

const prevMonthButtonClickHandler = ({
  setCurrentDate,
}: PrevMonthButtonClickHandlerPropsType): void => {
  setCurrentDate((prevDate) => set(prevDate, { month: getMonth(prevDate) - 1 }));
};

const toggleMonthpickerButtonClickHandler = ({
  setShowMonthpicker,
}: ToggleMonthpickerButtonClickHandlerPropsType): void => {
  setShowMonthpicker((prevShowMonthpicker) => !prevShowMonthpicker);
};

const DatepickerMonthHandlers = ({
  setCurrentDate,
  setShowMonthpicker,
}: DatepickerMonthHandlersPropsType): DatepickerMonthHandlersReturnType => {
  return {
    handleNextMonthButtonClick: () => nextMonthButtonClickHandler({ setCurrentDate }),
    handlePrevMonthButtonClick: () => prevMonthButtonClickHandler({ setCurrentDate }),
    handleToggleMonthpickerButtonClick: () =>
      toggleMonthpickerButtonClickHandler({ setShowMonthpicker }),
  };
};

export { DatepickerMonthHandlers };
