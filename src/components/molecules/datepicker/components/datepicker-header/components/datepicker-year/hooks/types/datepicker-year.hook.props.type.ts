// Vendors
import { Dispatch, SetStateAction } from 'react';
import { Locale } from 'date-fns';

type DatepickerYearHookPropsType = {
  currentDate: Date;
  locale: Locale;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
  setShowYearpicker: Dispatch<SetStateAction<boolean>>;
};

export { DatepickerYearHookPropsType };
