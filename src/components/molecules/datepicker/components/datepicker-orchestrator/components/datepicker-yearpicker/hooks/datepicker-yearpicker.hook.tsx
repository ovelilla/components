// Vendors
import React, { useEffect, useRef } from 'react';
// Handlers
import { DatepickerYearpickerHandlers } from '../handlers/datepicker-yearpicker.handlers';
// Types
import { DatepickerYearHookPropsType } from './types/datepicker-yearpicker.hook.props.type';
import { DatepickerYearHookReturnType } from './types/datepicker-yearpicker.hook.return.type';
// Utils
import { getYearDates } from './utils/datepicker-yearpicker.hook.utils';

const DatepickerYearpickerHook = ({
  currentDate,
  setCurrentDate,
  setShowYearpicker,
  showYearpicker,
  yearsRange,
}: DatepickerYearHookPropsType): DatepickerYearHookReturnType => {
  const yearDates = getYearDates({ yearsRange });
  const yearRefs = useRef<React.RefObject<HTMLButtonElement>[]>(
    Array.from({ length: yearDates.length }, () => React.createRef<HTMLButtonElement>())
  );

  const { handleYearButtonClick, handleScrollToCurrentYear } = DatepickerYearpickerHandlers({
    currentDate,
    setCurrentDate,
    setShowYearpicker,
    yearRefs,
    yearsRange,
  });

  useEffect(() => {
    handleScrollToCurrentYear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showYearpicker]);

  return {
    handleYearButtonClick,
    yearDates,
    yearRefs,
  };
};

export { DatepickerYearpickerHook };
