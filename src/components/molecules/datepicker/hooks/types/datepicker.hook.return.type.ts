// Vendors
import { Dispatch, SetStateAction } from 'react';
import { Locale } from 'date-fns';

type DatepickerHookReturnType = {
  currentDate: Date;
  datepickerRef: React.RefObject<HTMLDivElement>;
  locale: Locale;
  selectedDate: Date | null;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
  setSelectedDate: Dispatch<SetStateAction<Date | null>>;
  setShowMonthpicker: Dispatch<SetStateAction<boolean>>;
  setShowYearpicker: Dispatch<SetStateAction<boolean>>;
  showMonthpicker: boolean;
  showYearpicker: boolean;
};

export { DatepickerHookReturnType };
