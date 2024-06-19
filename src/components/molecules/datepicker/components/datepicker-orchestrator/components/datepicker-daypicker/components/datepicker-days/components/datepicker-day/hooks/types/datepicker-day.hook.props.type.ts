// Vendors
import { Dispatch, SetStateAction } from 'react';
import { Locale } from 'date-fns';

type DatepickerDayHookPropsType = {
  currentDate: Date;
  date: Date;
  locale: Locale;
  selectedDate: Date | null;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
  setSelectedDate: Dispatch<SetStateAction<Date | null>>;
};

export { DatepickerDayHookPropsType };
