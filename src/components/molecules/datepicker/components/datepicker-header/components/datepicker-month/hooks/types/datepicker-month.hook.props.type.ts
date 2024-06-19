// Vendors
import { Dispatch, SetStateAction } from 'react';
import { Locale } from 'date-fns';

type DatepickerMonthHookPropsType = {
  currentDate: Date;
  locale: Locale;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
  setShowMonthpicker: Dispatch<SetStateAction<boolean>>;
};

export { DatepickerMonthHookPropsType };
