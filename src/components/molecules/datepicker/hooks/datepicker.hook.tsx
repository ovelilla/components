// Vendors
import { useEffect, useRef, useState } from 'react';
// Types
import { DatepickerHookPropsType } from './types/datepicker.hook.props.type';
import { DatepickerHookReturnType } from './types/datepicker.hook.return.type';
// Utils
import {
  getLocale,
  setInitialCurrentDate,
  setInitialSelectedDate,
} from './utils/datepicker.hook.utils';

const DatepickerHook = ({
  localeCode,
  value,
}: DatepickerHookPropsType): DatepickerHookReturnType => {
  const [currentDate, setCurrentDate] = useState<Date>(setInitialCurrentDate({ value }));
  const [selectedDate, setSelectedDate] = useState<Date | null>(setInitialSelectedDate({ value }));
  const [showMonthpicker, setShowMonthpicker] = useState<boolean>(false);
  const [showYearpicker, setShowYearpicker] = useState<boolean>(false);

  const datepickerRef = useRef<HTMLDivElement>(null);

  const locale = getLocale({ localeCode });

  useEffect(() => {
    setCurrentDate(setInitialCurrentDate({ value }));
    setSelectedDate(setInitialSelectedDate({ value }));
  }, [value]);

  return {
    currentDate,
    datepickerRef,
    locale,
    selectedDate,
    setCurrentDate,
    setSelectedDate,
    setShowMonthpicker,
    setShowYearpicker,
    showMonthpicker,
    showYearpicker,
  };
};

export { DatepickerHook };
