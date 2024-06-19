// Vendors
import React, { useEffect, useRef } from 'react';
// Handlers
import { DatepickerMonthpickerHandlers } from '../handlers/datepicker-monthpicker.handlers';
// Types
import { DatepickerMonthHookPropsType } from './types/datepicker-monthpicker.hook.props.type';
import { DatepickerMonthHookReturnType } from './types/datepicker-monthpicker.hook.return.type';
// Utils
import { getMonthDates } from './utils/datepicker-monthpicker.hook.utils';

const DatepickerMonthpickerHook = ({
  currentDate,
  setCurrentDate,
  setShowMonthpicker,
  showMonthpicker,
}: DatepickerMonthHookPropsType): DatepickerMonthHookReturnType => {
  const monthDates = getMonthDates({ currentDate });
  const monthRefs = useRef<React.RefObject<HTMLButtonElement>[]>(
    Array.from({ length: monthDates.length }, () => React.createRef<HTMLButtonElement>())
  );

  const { handleMonthButtonClick, handleScrollToCurrentMonth } = DatepickerMonthpickerHandlers({
    currentDate,
    monthRefs,
    setCurrentDate,
    setShowMonthpicker,
  });

  useEffect(() => {
    handleScrollToCurrentMonth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showMonthpicker]);

  return {
    handleMonthButtonClick,
    monthDates,
    monthRefs,
  };
};

export { DatepickerMonthpickerHook };
